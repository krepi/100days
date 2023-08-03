const express = require('express');


const app = express();

app.get('/currenttime', function(req,resp){
resp.send('<h2>' + new Date().toISOString() + '</h2>');
});
app.get('/', function(req,resp){
resp.send('<h1>Siema nigga</h1>');
});

app.listen(3000);



