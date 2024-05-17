import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import employeeRoutes from './routes/employeeRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', employeeRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/employees';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
