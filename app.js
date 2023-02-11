const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/privacy-policy', (req, res) => {
  res.redirect('privacy.ejs');
});

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Server listening on port 3000");
});
