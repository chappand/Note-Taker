const fs = require('fs');

const noteData = fs.readFile('../db/db.json', (err, data) => {
    if (err) throw err;
    console.log(data);
});

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(noteData));


    app.post('/api/tables', (req, res) => {});
// fs.appendfile note?
};