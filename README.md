# Virtual Study Group

Virtual Study Group is an innovative web application designed to enhance collaborative learning among students. It provides a comprehensive platform for organizing and participating in virtual study sessions, complete with real-time collaboration tools and resource sharing capabilities.

## Features

### Core Functionality

- 👤 User Authentication (Firebase)
- 👥 Profile Management
- 📚 Study Group Creation & Management
- 📅 Scheduling & Calendar Integration
- 💬 Real-time Collaboration Tools

### Collaboration Tools

- 🎥 Video/Audio Conferencing
- 💭 Chat and Messaging
- 📝 Shared Whiteboards
- 🖥️ Screen Sharing
- 📁 Resource Sharing

### Engagement

- ✅ Task & Assignment Management
- 🏆 Gamification Elements
- 📊 Progress Tracking

## Tech Stack

### Frontend

- Next.js 15
- TypeScript
- Tailwind CSS
- WebRTC for real-time communication
- Socket.io for real-time updates

### Backend

- Next.js API routes
- Node.js

### Database & Storage

- PostgreSQL
- Prisma ORM
- Firebase Storage

### Authentication

- Firebase Authentication

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/iskalotech/virtual-study-group.git
cd virtual-study-group
```

2. Install dependencies:

```bash
npm install
```

```bash
yarn
```

```bash
bun install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Update the `.env.local` file with your configuration:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Database
DATABASE_URL=

# Other Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
virtual-study-group/
├── app/                    # Next.js app directory
├── components/             # Reusable components
├── lib/                    # Utility functions and configurations
├── prisma/                # Database schema and migrations
├── public/                # Static files
└── styles/                # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
