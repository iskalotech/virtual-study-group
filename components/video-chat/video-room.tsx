'use client';

import { useEffect, useRef, useState } from 'react';
import SimplePeer from 'simple-peer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, MicOff, Video, VideoOff } from 'lucide-react';
import { useSocket } from '@/hooks/use-socket';

interface VideoRoomProps {
  roomId: string;
  userId: string;
}

export function VideoRoom({ roomId, userId }: VideoRoomProps) {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [peers, setPeers] = useState<{ [key: string]: SimplePeer.Instance }>({});
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const { socket } = useSocket();
  const localVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const initializeMedia = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setStream(mediaStream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error('Error accessing media devices:', error);
      }
    };

    initializeMedia();
    return () => {
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  useEffect(() => {
    if (!socket || !stream) return;

    socket.emit('join-room', { roomId, userId });

    socket.on('user-connected', (newUserId: string) => {
      const peer = new SimplePeer({
        initiator: true,
        stream,
        trickle: false,
      });

      peer.on('signal', signal => {
        socket.emit('signal', { userId: newUserId, signal });
      });

      setPeers(prev => ({ ...prev, [newUserId]: peer }));
    });

    socket.on('signal', ({ userId, signal }) => {
      if (peers[userId]) {
        peers[userId].signal(signal);
      } else {
        const peer = new SimplePeer({
          initiator: false,
          stream,
          trickle: false,
        });

        peer.on('signal', signal => {
          socket.emit('signal', { userId, signal });
        });

        peer.signal(signal);
        setPeers(prev => ({ ...prev, [userId]: peer }));
      }
    });

    return () => {
      socket.off('user-connected');
      socket.off('signal');
      Object.values(peers).forEach(peer => peer.destroy());
    };
  }, [socket, stream, roomId, userId, peers]);

  const toggleAudio = () => {
    if (stream) {
      stream.getAudioTracks().forEach(track => {
        track.enabled = !audioEnabled;
      });
      setAudioEnabled(!audioEnabled);
    }
  };

  const toggleVideo = () => {
    if (stream) {
      stream.getVideoTracks().forEach(track => {
        track.enabled = !videoEnabled;
      });
      setVideoEnabled(!videoEnabled);
    }
  };

  return (
    <Card className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <video
            ref={localVideoRef}
            autoPlay
            muted
            playsInline
            className="w-full rounded-lg"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={toggleAudio}
              className={!audioEnabled ? 'bg-red-500 hover:bg-red-600' : ''}
            >
              {audioEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={toggleVideo}
              className={!videoEnabled ? 'bg-red-500 hover:bg-red-600' : ''}
            >
              {videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        {Object.keys(peers).map(peerId => (
          <div key={peerId} className="relative">
            <video
              ref={video => {
                if (video && peers[peerId]) {
                  peers[peerId].on('stream', stream => {
                    video.srcObject = stream;
                  });
                }
              }}
              autoPlay
              playsInline
              className="w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}