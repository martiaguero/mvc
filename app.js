const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000;
const rutasAbout = require('./routes/about')
const rutasMain = require('./routes/main')


app.listen(port, () => {
    console.log(`Servidor funcionando en http://localhost:${port}`);
});

app.use(express.static('public'));
app.use('/', rutasMain);
app.use('/', rutasAbout);