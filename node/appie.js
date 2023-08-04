const fs = require('fs');
const path = require('path');


const express = require('express');


const app = express();

app.use(express.urlencoded({extended: false}));

app.get('/currenttime', function (req, resp) {
    resp.send('<h2>' + new Date().toISOString() + '</h2>');
});
app.get('/', function (req, resp) {
    resp.send('<form action="/store-user" method="post">' +
        '<label>Your name: </label>' +
        '<input type="text" name="username">' +
        '<button type="submit">Submit</button>' +
        '</form>');
});

app.post('/store-user', function (req, resp) {
    const userName = req.body.username;
    const filePath = path.join(__dirname, 'data', 'users.json');

    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    existingUsers.push(userName);

    fs.writeFileSync(filePath, JSON.stringify(existingUsers));

    resp.send('<h1>Username stored</h1><h2>' + userName + '</h2>')
});


app.get('/users', function (req, res) {
    const filePath = path.join(__dirname, 'data', 'users.json');

    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    let responseData = '<ul>';

    for (const user of existingUsers) {
        responseData += '<li>' + user + '</li>';
    }
    responseData += '</ul>';
    console.log(responseData);

    res.send(responseData);

});

app.listen(3000);



