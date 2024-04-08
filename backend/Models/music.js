const fs = require('fs');
const path = require('path');

class Music {
  static getAll() {
    const arquivosMusicas = fs.readdirSync(path.join(__dirname, '../public/music'));
    return arquivosMusicas.map(file => {
      const fileName = path.parse(file).name;
      return {
        title: fileName,
        url: `/music/${file}`
      };
    });
  }
}

module.exports = Music;
