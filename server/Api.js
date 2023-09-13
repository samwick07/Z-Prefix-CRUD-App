const express = require('express');
const cors = require('cors');
const api = express();
const port = 8080;

api.use(cors());
api.use(express.json());

const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

// Hard-coded items for back-end testing.
const inventoryData = [
  {name: 'Hammer'},
  {name: 'Shovel'},
  {name: 'Square'},
  {name: 'Tape Measure'},
  {name: 'Screw Driver'},
  {name: 'Socket Wrench'},
];

api.get('/', (req, res) => res.status(200).send(`Z-Prefix CRUD API is listening at http://localhost:${port}!`));

api.get('/Inventory', (req, res) => res.status(200).send(inventoryData));

api.listen(port, () => console.log(`Z-Prefix CRUD API is listening at http://localhost:${port}!`));