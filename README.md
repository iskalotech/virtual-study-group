<!-- @format -->

# Virtual Study Group

## Overview

Virtual Study Group is an innovative web application designed to enhance collaborative learning among students. It offers a comprehensive suite of features, including user authentication, profile management, and the ability to create and join study groups. With integrated scheduling, real-time collaboration tools, and video/audio conferencing, students can effectively organize and participate in study sessions. The platform also supports resource sharing, task management, and gamification elements to boost engagement and productivity. Built with modern technologies like Next.js, Tailwind CSS, and Firebase, and powered by a robust PostgreSQL database managed through Prisma ORM, Virtual Study Group provides a seamless and interactive learning experience.

## Key Features

1. **User Authentication**:

   - Sign up and log in using email.
   - Secure authentication using Firebase.

2. **Profile Management**:

   - Create and manage user profiles with information like name, educational institution, subjects of interest, and availability.

3. **Study Group Creation**:

   - Create or join study groups based on subjects, courses, or specific topics.

4. **Scheduling and Calendar Integration**:

   - Schedule study sessions with notifications and reminders.

5. **Real-time Collaboration Tools**:

   - Shared whiteboards, document collaboration, and screen sharing.

6. **Video/Audio Conferencing**:

   - Integrated video and audio conferencing capabilities.

7. **Chat and Messaging**:

   - Group discussions and direct messaging between users.

8. **Resource Sharing**:

   - Upload and share study materials, notes, and resources within groups.

9. **Task and Assignment Management**:

   - Create and assign tasks or study goals within groups.

10. **Gamification**:
    - Badges, points, or leaderboards to encourage participation and engagement.

## Tech Stack

- **Frontend**: Next.js 15, Tailwind CSS
- **Backend**: Node.js, Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Firebase Authentication
- **Real-time Features**: WebRTC, Socket.io
- **Storage**: Firebase Storage

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/iskalotech/virtual-study-group.git
   cd virtual-study-group
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   - Create a `.env` file in the root directory.
   - Add your database URL and Firebase configuration:
     ```
     DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase"
     ```

4. **Run Prisma Migrations**:

   ```bash
   npx prisma migrate dev
   ```

5. **Start the Development Server**:

   ```bash
   npm run dev
   ```

6. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please contact [iskalotech@gmail.com].
