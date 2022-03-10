const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./config/db');
const app = express();
const globalErrorHandler = require("./helper/errorMiddleware");
const userRoute = require('./routes/userRoute');
const passwordResetRoute = require('./routes/passwordResetRoute');
const PORT = process.env.PORT || 5000

require('dotenv').config();
db();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use(globalErrorHandler);

app.use('/api/users', userRoute);
app.use('/account', passwordResetRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))