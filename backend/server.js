const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const CORS = require('cors');
const connectWithMongoDB = require('./config.js/db');
const rootRouter = require('./routes/index.js');

dotenv.config();

app.use(bodyParser.json());
app.use(CORS());

const PORT = process.env.PORT || 5000;
connectWithMongoDB();


app.use("/api/v1", rootRouter);


app.use("/", (req, res) => {
    res.send("Welcome to Myndra API");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});