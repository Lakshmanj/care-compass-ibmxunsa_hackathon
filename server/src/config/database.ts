import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
    const uri = process.env.MONGO_URI;

    if (!uri) {
        console.error('--- ERROR: MONGO_URI is not defined in .env ---');
        process.exit(1);
    }

    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};