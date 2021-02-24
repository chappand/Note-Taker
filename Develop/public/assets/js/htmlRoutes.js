const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));

module.exports = (app) => {

    app.get('/notes', (req, res) => {
        res.sendFile(path.join('/Users/andrewchappell/Desktop/GitHub Upload/Note-Taker/Develop/public/notes.html'));
      });

      app.get('*', (req, res) => {
        res.sendFile(path.join('/Users/andrewchappell/Desktop/GitHub Upload/Note-Taker/Develop/public/index.html'));
      });

    };

   console.log(__dirname);