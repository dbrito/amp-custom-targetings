var express = require('express');
var app = express();

app.get('/json', function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({ meuk: 'quem liga' }));
});

app.listen(3000, function () {
  console.log('Rodando a bagaça');
});
