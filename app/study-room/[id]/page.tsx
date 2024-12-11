'use client';

import { useAuth } from '@/components/providers/auth-provider';
import { VideoRoom } from '@/components/video-chat/video-room';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function StudyRoom({ params }: { params: { id: string } }) {
  const { user } = useAuth();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ id: string; text: string; sender: string }>>([]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && user) {
      const newMessage = {
        id: Date.now().toString(),
        text: message,
        sender: user.email || 'Anonymous',
      };
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
    }
  };

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VideoRoom roomId={params.id} userId={user.uid} />
        </div>

        <div className="space-y-4">
          <Tabs defaultValue="chat">
            <TabsList className="w-full">
              <TabsTrigger value="chat" className="flex-1">Chat</TabsTrigger>
              <TabsTrigger value="participants" className="flex-1">Participants</TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="mt-4">
              <Card className="h-[600px] flex flex-col">
                <ScrollArea className="flex-1 p-4">
                  {messages.map(msg => (
                    <div
                      key={msg.id}
                      className={`mb-4 ${
                        msg.sender === user.email
                          ? 'ml-auto text-right'
                          : 'mr-auto'
                      }`}
                    >
                      <p className="text-xs text-muted-foreground">{msg.sender}</p>
                      <div
                        className={`mt-1 rounded-lg p-3 inline-block max-w-[80%] ${
                          msg.sender === user.email
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </ScrollArea>

                <form onSubmit={sendMessage} className="p-4 border-t">
                  <div className="flex space-x-2">
                    <Input
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Type a message..."
                    />
                    <Button type="submit" size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </Card>
            </TabsContent>

            <TabsContent value="participants" className="mt-4">
              <Card className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary" />
                    <div>
                      <p className="text-sm font-medium">{user.email}</p>
                      <p className="text-xs text-muted-foreground">Host</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}