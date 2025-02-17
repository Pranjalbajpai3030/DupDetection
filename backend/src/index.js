import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

console.log("✅ Loaded MONGO_URI:", process.env.MONGO_URI); // Debugging

import connectDB from './db/index.js';
import app from './app.js';



connectDB()
.then(() => {
    console.log("✅ MongoDB connected");
    app.listen(8000, () => {
        console.log("✅ Server is running on http://localhost:8000");
})
.catch((error) => { 
        console.log("❌ MongoDB connection error:", error);
    })
