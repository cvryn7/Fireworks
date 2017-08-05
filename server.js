const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});