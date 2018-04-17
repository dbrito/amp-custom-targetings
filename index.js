var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/json', function (request, response) {

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('AMP-Access-Control-Allow-Source-Origin', 'https://esporte.uol.com.br');
    response.setHeader('Access-Control-Expose-Headers', 'AMP-Access-Control-Allow-Source-Origin');
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({"targeting": {"time":["palmeiras","real-madrid"]}}));
});

app.listen(app.get('port'), function () {
  console.log('Rodando a bagaça', app.get('port'));
});
