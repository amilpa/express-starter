require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const helmet = require("helmet");

const notFound = require("./middlewares/not-found");
const handleError = require("./middlewares/error-handler");

const auth = require("./routes/auth");
const data = require("./routes/data");

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(notFound);
app.use(handleError);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  } catch (error) {
    console.log(error.message);
  }
};

start();
