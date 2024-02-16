const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const path = require('path');

const app = express();

const uri = 'mongodb+srv://(LESTRING)/(DBNAME)?retryWrites=true&w=majority';

const IDSchema = new mongoose.Schema({
    identification: {
        type: String,
        required: true
    }
});

mongoose.pluralize(null); // mongoose adds plurals behind every single god dang collection I sent in. This is for disabiling it.
const collection = new mongoose.model('soul_who_chose_different_path', IDSchema);

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connected');
    } catch (error) {
        console.error(error);
    }
}

connect();

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'public/0.html'));
});

app.get('/robots.txt', (_, res) => {
    res.type('text/plain')
    res.sendFile(path.join(__dirname, 'public/robots.txt'))
});

app.get('/robots.txt', (_, res) => {
    res.type('text/plain')
    res.sendFile(path.join(__dirname, 'public/robots.txt'))
});

app.post('/goblet_of_fire', (req, res) => {
    const data = {
        identification: req.body.value
    }
    // TODO: add sanitization and filters
    collection.insertMany(data);
    res.end();
});

app.use((_, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, 'public/404.html'));
})

app.listen(3000, () => {
    console.log('App listening on port 3000');
})
