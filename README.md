# Dashboard App

This project is a simple administrative dashboard for managing a list of employees. It includes both backend and frontend services using the following technologies:
- **Frontend**: React with Next.js, Chakra UI, TypeScript
- **Backend**: Node.js with Express.js, MongoDB (Mongoose)

## Project Structure

```
dashboard-app/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.ts
│   ├── package.json
│   ├── tsconfig.json
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── public/
│   ├── next.config.js
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
├── docker-compose.yml
└── README.md
```

## Prerequisites

- Docker
- Docker Compose
- Git

## Getting Started

### 1. Clone the Repository

Clone the main repository:

```sh
git clone <url-of-main-repo>
cd my-dashboard-app
```

### 2. Set Up Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
MONGO_URI=mongodb://mongo:27017/employees
```

### 3. Build and Run the Containers

Run the following command to build and start the containers:

```sh
docker-compose up --build
```

This will start the following services:
- **backend**: Available at `http://localhost:5000`
- **frontend**: Available at `http://localhost:3000`
- **mongo**: MongoDB instance

### 4. Access the Application

- Frontend: Open [http://localhost:3000](http://localhost:3000) in your browser to access the frontend.
- Backend: You can test the backend API at [http://localhost:5000/api/employees](http://localhost:5000/api/employees).

## Useful Commands

### Stop the Containers

```sh
docker-compose down
```

### Rebuild the Containers

```sh
docker-compose up --build
```

### View Logs

```sh
docker logs dashboard-app_backend_1
docker logs dashboard-app_frontend_1
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
