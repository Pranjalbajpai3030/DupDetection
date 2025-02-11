import mongoose from 'mongoose';

const MONGO_URI = "mongodb+srv://PranjalBajpai:pranjal@pranjal.egbqz.mongodb.net/?retryWrites=true&w=majority&appName=pranjal";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;
