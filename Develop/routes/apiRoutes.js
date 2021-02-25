const fs = require('fs');
const { brotliDecompressSync } = require('zlib');
const db = require('../db/db.json');

var id = 0;

const noteData = fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    console.log(data);
});

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        fs.readFileSync("./db/db.json", db);
        res.json(db);
    });


    app.post('/api/notes', (req, res) => {
        fs.readFileSync("./db/db.json", db);
        //merge/create note with req data & unique id
        let newNote = {
            id: id,
            title: req.body.title,
            text: req.body.text
        }
        // console.log(newNote)
        db.push(newNote);
        fs.writeFileSync("./db/db.json", JSON.stringify(db), "utf-8");
        id++
        res.json(db);
    });

    //make a delete route


};

// '/Users/andrewchappell/Desktop/GitHub Upload/Note-Taker/Develop/db/db.json'