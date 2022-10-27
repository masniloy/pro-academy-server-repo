const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
const allData = require('./Data/data.json');
const singleData = require('./Data/singleData.json');

app.use(cors());
app.get('/', (req, res) => {
    res.send('api ok');
})
app.get('/all-data', (req, res) => {
    res.send(allData);
});

app.get('/singleData/:id', (req, res) => {
    const id = req.params.id;
    const sdata = singleData.find(nu => nu.id === id);
    res.send(sdata)
})
app.listen(port, () => {
    console.log('port :', port);
})