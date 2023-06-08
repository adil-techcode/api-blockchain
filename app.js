var express = require('express');
const cors = require("cors");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");


app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json({
  extended: true,
}))

const router = require("./routes/blockchainRoutes");

app.use("/", router)

app.listen(port, () => {console.log(`Blockchain API listening on port ${port}`)});

module.exports = app;
