import 'dotenv/config';
import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// A simple test route
app.get('/', (req, res) => res.send('API is running...'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
