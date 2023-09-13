const express = require('express');
const cors = require('cors');
const api = express();
const port = 8080;

api.use(cors());
api.use(express.json());

const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

api.get('/', (req, res) => res.status(200).send(`Z-Prefix CRUD API is listening at http://localhost:${port}!`));
api.get('/SignIn', (req, res) => res.status(200).send({ token: 'test123' }));

api.listen(port, () => console.log(`Z-Prefix CRUD API is listening at http://localhost:${port}!`));