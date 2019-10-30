var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    msg: `Hello ${req.query.name}!`
  });
});

app.listen(8080, () => {
  console.log(`Example app listening on port 8080!`)
})