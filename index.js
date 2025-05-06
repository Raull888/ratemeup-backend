const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const db = require('../config/db');

dotenv.config();

const app = express();

// CORS config
const allowedOrigins = [
  'http://localhost:3000',        // Desarrollo local
  'https://tupagina.netlify.app' // Reemplaza con la URL real de tu frontend en Netlify
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir peticiones sin origin (como Postman) o si está en la lista
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  }
}));

app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/ratings', ratingRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
