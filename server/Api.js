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
  {name: 'Hammer', description: 'Used for nailing stuff', quantity: 7},
  {name: 'Shovel', description: 'Used for digging stuff', quantity: 12},
  {name: 'Square', description: 'Used for 90 degree stuff', quantity: 1},
  {name: 'Tape Measure', description: 'Used for measuring stuff', quantity: 2},
  {name: 'Screw Driver', description: 'Used for screwing stuff', quantity: 2},
  {name: 'Socket Wrench', description: 'Used for torquing stuff', quantity: 3},
];

api.get('/', (req, res) => res.status(200).send(`Z-Prefix CRUD API is listening at http://localhost:${port}!`));

api.get('/Inventory', (req, res) => res.status(200).send(inventoryData));

api.listen(port, () => console.log(`Z-Prefix CRUD API is listening at http://localhost:${port}!`));