const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./database/database');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());


//routers variables
const position = require('./positions/position');

//sequelize models
const personModel = require('./persons/person.model');
const positionModel = require('./positions/positions.model');

//Initial config
connection.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error in database connection', err);
})

app.get('/', (req, res) => {
    res.send('Tunts org chat app is running...');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use('/', position);