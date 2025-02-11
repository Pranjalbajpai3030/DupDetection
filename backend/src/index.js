import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

console.log("✅ Loaded MONGO_URI:", process.env.MONGO_URI); // Debugging

import connectDB from './db/index.js';
connectDB();
