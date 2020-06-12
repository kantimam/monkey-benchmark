const express = require('express');
const api = require('./api/api.js');
const path = require('path');
/* const cors = require('cors'); */
const commonWords = require('./words/commonWords.json');
const wordArrayLen = commonWords.length;



const app = express();
/* app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
})); */

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// manage users
app.use('/api', api)


// randomize common words array on startup
shuffleArray(commonWords);
// get random word
app.get('/randomword', (req, res) => {

    // send a random item from the commonWords array
    return res.send(commonWords[Math.floor(Math.random() * wordArrayLen)])
})

// send a batch of random words at once 30 atm
app.get('/randomwords', (req, res) => {
    let count = 30;
    const out = new Set();
    let i = 0;
    let item;
    while (i < count) {
        item = commonWords[Math.floor(Math.random() * wordArrayLen)];
        if (!out.has(item)) {
            out.add(item);
            i++;
        }
    }
    res.send(Array.from(out));
})

app.get('*', (req, res) => {
    //res.sendFile(path.join(__dirname = 'client/build/index.html'));
    res.sendFile('index.html', {
        root: `${__dirname}/client/build`
    })
})



app.listen(process.env.PORT || 5000, () => {
    console.log(`running on port ${process.env.PORT}`)
})


/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}