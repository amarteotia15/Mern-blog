import { configDotenv } from 'dotenv';
import express from 'express'

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

app.listen(5173,()=>{
    console.log('server is running on port 5173'); 
})