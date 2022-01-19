const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

mongoose.connect('mongodb://localhost/city_list');

const citiesSchema = new mongoose.Schema({
    id : Number,
    name: String,
    state: String 

});

const city = mongoose.model('city',citiesSchema);

app.get('/', async function (req, res) {
    
    const citylist = await city.find();
    console.log(citylist)
    res.send(citylist)
});

app.listen(3001, () => {
    console.log('started express server on 3001')
})