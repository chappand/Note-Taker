const path = require('path');
const express = require('express');
const app = express();


module.exports = (app) => {

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../../notes.html'));
      });

      app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../index.html'));
      });

    };

   console.log(__dirname);