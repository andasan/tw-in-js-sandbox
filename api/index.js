const express = require('express')
const cors = require('cors')
const Chance = require('chance')

// Initialize the express app
const app = express();
app.use(cors());
app.use(express.json());

// Make some animals
const chance = new Chance();

const animals = [...Array(250).keys()].map(id => {
    return {
        id,
        type: chance.animal(),
        age: chance.age(),
        name: chance.name(),
    }
});

// Endpoint to search for animals
app.get('/api', (req, res) => {
    // Filter results by query
    const q = req.query.q?.toLowerCase() || '';
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q));

    res.send(results);

});

app.listen(6000, () => console.log('Listening on port http://localhost:6000'));