import { configDotenv } from 'dotenv';
import express from 'express'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

import mongoose from 'mongoose'

configDotenv();

mongoose.connect(
    process.env.MONGO
).then(()=>{
    console.log('Connected to MongoDB');
}).catch(()=>{
    console.log('Error connecting to MongoDB');
});

const app = express();
app.use(express.json());

app.listen(5173,()=>{
    console.log('server is running on port 5173'); 
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode ||500;
    const message = err.message || 'Internal server Error';
    res.status(statusCode).json({
        success :false,
        statusCode,
        message,
    });
});