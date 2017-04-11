const express = require('express');
const app = express();

var port = 3000;

app.use(express.static('public'));

app.get('/', function(request, response){
 response.sendFile('public/Neiko.html', {'root': __dirname});
});

app.get('/', function(request, response) {
  response.sendFile('Neiko.html');
});

app.get('/myURI', function(request, response) {
  response.send('Responding to a GET request!');
});

app.listen(port);
