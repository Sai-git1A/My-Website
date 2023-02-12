const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set("views", __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/privacy-policy', (req, res) => {
  res.render('privacy');
});

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Server listening on port 3000");
});
