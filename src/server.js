const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();

app.use(cors());

app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log("Connected to Database"))

const scoreboardRouter = require('../routes/scoreboard')
app.use('/scoreboard', scoreboardRouter)

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => console.log('Server Started'))