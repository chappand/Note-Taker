const fs = require('fs');

const noteData = fs.readFile('../../../../Develop/db/db.json', (err, data) => {
    if (err) throw err;
    console.log(data);
});

module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(noteData));


    app.post('/api/notes', (req, res) => {
        noteData.push(req.body);
        res.json(true);
    });

};

// '/Users/andrewchappell/Desktop/GitHub Upload/Note-Taker/Develop/db/db.json'