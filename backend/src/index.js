const express = require('express');

const path = require('path');
const app = express();
const port = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.static(path.join(__dirname, '../uploads')))
app.use(cors())
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('연결완료');
    })
    .catch(err => {
        console.error(err)
    })

app.get('/', (req, res, next) => {
    // throw new Error('It is an error')
    // 비동기 실행 시
    setImmediate(() => {next(new Error('It is an error'))})
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body)
})

app.use((error, req, res, next) => {
    res.status(err.status || 500)
    res.send(error.message || '서버에서 에러가 났습니다.')
})

app.use('/users', require('./routes/users'))
app.use('/products', require("./routes/products"))

app.listen(port, () => {
    console.log(`${port}번에서 실행이 되었습니다.`);
});