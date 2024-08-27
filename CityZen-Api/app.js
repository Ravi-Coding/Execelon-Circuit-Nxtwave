const express = require("express");


const app = express();

app.use(express.json());


const cityRoutes = require("./routes/cityRoutes");


app.use('/api/cities',cityRoutes);

module.exports = app;


