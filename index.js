const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./user.route');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Hello Cakra');
});

app.use('/user', userRoute)

mongoose.connect('mongodb://localhost:27017/restapi-apps', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Mongo berhasil connect");
}).catch((error) => {
    console.error("Mongo gagal connect", error);
});

app.listen(7000, () => {
    console.log('Server telah tersedia di port 7000');
});