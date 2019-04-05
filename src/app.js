const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

const accounData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
const userData = fs.readFileSync(path.join(__dirname, 'json', 'user.json'), 'utf8');

const accounts = JSON.parse(accounData);
const users = JSON.parse(userData);

app.get('/', (req, res) => res.render(
    'index', { title: 'Account Summary', accounts }
));

app.listen(3000, () => console.log('Ps project running on port 3000!!'));