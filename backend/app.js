const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

// Middleware:
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
//Enables cross origin access
app.use(cors());

// Routes
app.use('/contact', require('./routes/contact'));

app.listen(port, ()=>{
    console.log(`Wincucr Backend listening at http://localhost:${port}`);
});