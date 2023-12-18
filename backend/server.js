const express = require('express')
const cors = require('cors')
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors())
require('dotenv').config();
const connectMongo = require('./db');
connectMongo()
const fileUpload = require("express-fileupload");
app.use(
  fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 },
  })
);
app.use('/api/auth',require('./routes/userRoutes'));
app.use('/api/booking',require('./routes/bookingRoute'));
app.use('/api/service',require('./routes/detailingRoute'));
app.use('/api/service',require('./routes/carsRoute'));

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log("listening perfect",port);
  });