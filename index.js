const { request } = require('express');
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('api ok')
})

app.listen(port, () => {
    console.log('port :', port);
})