// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

// ✅ Updated: Allowed frontend domains (include all deployed Vercel URLs)
const allowedOrigins = [
  'https://campuscomplainportal.vercel.app',
  'https://campuscomplainportal-4tig7hb1f-devesh-2005pcs-projects.vercel.app',
  'https://complaintportal-pevb1fe1v-devesh-2005pcs-projects.vercel.app'  // ✅ NEW
];

// ✅ Dynamic CORS configuration
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy: This origin is not allowed.'));
    }
  },
  credentials: true,
}));

app.use(express.json());

// ✅ Connect to MongoDB
connectDB();

// ✅ Test route
app.get('/', (req, res) => {
  res.send('🚀 Campus Complaint Portal API is running...');
});

// ✅ Route imports (add your actual routes here)
// import userRoutes from './routes/userRoutes.js';
// app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
