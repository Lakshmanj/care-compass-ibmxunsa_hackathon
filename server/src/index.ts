import * as dotenv from 'dotenv';
dotenv.config();
console.log('[1/4] Environment loaded');
import express from 'express';
import cors from 'cors';
console.log('[2/4] Core modules imported');
import { connectDB } from './config/database';
import chatRoutes from './routes/chat';
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import resourceRoutes from './routes/resources';
console.log('[3/4] Routes and agents loaded');

if (!process.env.PORT) {
    console.error('There was an issue assigning the PORT constant a value during server setup.')
    console.error('Please ensure that the .env file in /server/ is present and contains up-to-date information.')
    process.exit(1);
}

const PORT = process.env.PORT;
console.log(`[4/4] Starting server on port ${PORT}...`);

const app = express();
const allowedOrigins = [
    'http://localhost:5173',
    'https://care-compass-2026.netlify.app',
    process.env.CLIENT_URL,
].filter((origin): origin is string => Boolean(origin));

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use('/api/chat', chatRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);

connectDB().then( () => {
    app.listen(PORT, () => {
        console.log(`The server is now online at http://localhost:${PORT}`);
    });
});
