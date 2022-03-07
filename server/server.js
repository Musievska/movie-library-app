const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./config/db');
const app = express();
const globalErrorHandler = require("./middleware/errorMiddleware")
const globalErrorHandler = require("./helper/errorMiddleware");
const PORT = process.env.PORT || 5000

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(globalErrorHandler);
app.use('api/users');
db();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))