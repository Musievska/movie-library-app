const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./config/db');
const app = express();
const { globalErrorHandler, notFound } = require("./helper/errorMiddleware").default;
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
app.use(notFound);

app.use('/api/users', userRoute);
app.use('/account', passwordResetRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))