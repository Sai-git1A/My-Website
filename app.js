const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Server is listening on port 3000")
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/app-ads.txt');
});

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Server listening on port 3000");
});
