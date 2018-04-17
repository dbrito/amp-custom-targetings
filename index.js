var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/json', function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({ meuk: 'raiz' }));
});

app.get('/json', function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({ meuk: 'json' }));
});

app.listen(app.get('port'), function () {
  console.log('Rodando a bagaça', app.get('port'));
});
