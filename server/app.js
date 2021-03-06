const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const manifest = require('./manifest.json');

const PORT = process.env.PORT || manifest.port;
const ENVIRONMENT = process.env.ENVIRONMENT || manifest.environment;
const app = express();
app.use(cors());
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.json({ message: 'API live! 🕺' }));
app.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
