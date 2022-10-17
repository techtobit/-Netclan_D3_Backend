const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const port = process.env.PORT || 5000;

// import routers 
const getData = require('./Routes/LoadAllDataRoutes')


//express app
const app = express();
app.use(cors())

//middleware
app.use(express.json());





// Routes 
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// MVC Routes 
app.use('/', getData)





//connect mongodb with mongoose
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Db connected with Db app listening at http://localhost:${port}`);
    })
  }).catch((err) => {
    console.log(err);
  });
