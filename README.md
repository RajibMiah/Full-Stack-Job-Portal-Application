# Job Portal Application

A full-stack job portal application built using **React.js**, **Node.js**, and **Express.js**. This application allows users to search and apply for jobs while enabling employers to post job openings and manage applications.

---

## Features

### User Features:
- User registration and login (authentication & authorization).
- Browse and search for job listings.
- Filter jobs by categories, location, and skills.
- Apply for jobs directly through the platform.

- Manage profile and view applied jobs.

### Employer Features:
- Employer registration and login.
- Post job openings with detailed descriptions.
- Manage job postings (update or delete jobs).
- View and manage job applications.

### Admin Features:
- Dashboard to monitor job listings and users.
- Manage users and job postings.

---

## Technologies Used

### Frontend:
- **TypeScript**
- **React.js** with **React Router** for SPA functionality.
- **Axios** for API calls.
- **Tailwindcss** and **CSS Modules** for styling.

### Backend:
- **Node.js** with **Express.js** for API development.
- **MongoDB** with **Mongoose** for database operations.
- **JWT** for user authentication.

---

## Installation

### Prerequisites:
- Node.js and npm installed on your system.
- MongoDB database set up locally or in the cloud.

### Steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/RajibMiah/job-portal.git
   ```

2. Navigate to the project directory:
   ```bash
   cd job-portal
   ```

3. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```

4. Configure environment variables:
   - Create a `.env` file in the `backend` directory and add:
     ```env
     PORT=5000
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     ```

5. Start the backend server:
   ```bash
   npm start
   ```

6. Install dependencies for the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

7. Start the React development server:
   ```bash
   npm start
   ```

---

## Folder Structure

```
job-portal/
├── backend/
│   ├── config/        # Database and environment configurations
│   ├── controllers/   # Logic for API endpoints
│   ├── models/        # Mongoose models
│   ├── routes/        # Express routes
│   ├── server.js      # Main server entry point
│   └── .env.example   # Example environment variables
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Pages for the app
│   │   ├── utils/       # Utility functions
│   │   └── App.js       # Main React entry point
│   └── public/
├── README.md
```

---

## Usage

- Navigate to the frontend (`http://localhost:3000`) for the client-side application.
- Access backend API at `http://localhost:5000`.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For inquiries or support, please contact:
- **Your Name** - [your.email@example.com](mailto:your.email@example.com)
- GitHub: [https://github.com/your-username](https://github.com/your-username)

---

## Screenshots

### Homepage:
![Homepage](path-to-screenshot/homepage.png)

### Job Listings:
![Job Listings](path-to-screenshot/job-listings.png)

---
