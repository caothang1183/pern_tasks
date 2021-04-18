const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000 || process.env.PORT;

const pool = require('./database/database');

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('todo-api'));
app.listen(port, () => console.log(`API run on post: ${port}`))