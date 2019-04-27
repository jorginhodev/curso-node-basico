const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();

// iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapirs',
  { useNewUrlParser: true }
);
requireDir('./src/models');

const Product = mongoose.model('Product');

// primeira rota
app.get('/', (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'https://github.com/facebook/react-native'
  });

  return res.send('Hello Rocketseat!');
});

app.listen(3001);
