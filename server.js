const express = require('express');
const mongoose = require('mongoose');

// iniciando o app
const app = express();

// iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapirs', { useNewUrlParser: true });

// primeira rota
app.get('/', (req, res) => {
  res.send('Hello Rocketseat!');
});

app.listen(3001);