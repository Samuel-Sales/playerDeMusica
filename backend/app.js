const express = require('express');
const cors = require('cors');
const path = require('path');
const musicController = require('./Controllers/musicController');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', musicController.getAll);

app.listen(3001, () => {
  console.log('Servidor online na porta 3001');
});
