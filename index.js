const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('Backend está funcionando');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
