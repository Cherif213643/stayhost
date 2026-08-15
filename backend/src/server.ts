import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';

// 1. INITIALIZE SETTINGS
// Instructs Node to safely extract secret environment keys from your local .env file.
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 2. CYBERSECURITY SHIELD MIDDLEWARES
app.use(helmet());            // Strips descriptive framework headers to confuse hacker scanners.
app.use(cors());              // Safely grants access for our future Next.js app to pull data.
app.use(express.json());      // Configures your backend engine to read incoming JSON text inputs.

// 3. BASELINE API HEALTH SYSTEM CHECK
// A lightweight route designed to verify if your server engine is active.
app.get('/api/health', (req, res) => {
  res.json({ 
    status: "online", 
    message: "StayHost API Engine is running smoothly! 🚀" 
  });
});

// 4. NETWORK LISTENER PORT ACTIVATION
app.listen(PORT, () => {
  console.log(`🚀 StayHost Backend Server is listening on http://localhost:${PORT}`);
});
