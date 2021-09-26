const express = require("express");

const app = express();

const port = 3000;

const server = app.listenerCount(port, () => {console.log(`running on localhost: ${port}`)});

app.use(express.static('src'));