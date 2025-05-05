const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const db = require('../config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Conectar rutas
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/ratings', ratingRoutes);

// Iniciar servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
