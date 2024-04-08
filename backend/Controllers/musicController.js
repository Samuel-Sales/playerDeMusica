const Music = require('../models/music');

const musicController = {
  getAll: (req, res) => {
    try {
      const musicas = Music.getAll();
      res.json(musicas);
    } catch (error) {
      console.error('Error ao buscar as musicas:', error);
      // res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

module.exports = musicController;
