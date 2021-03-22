const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const rateLimit = require("express-rate-limit");
const port = 3000;

// Middleware:
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
//Enables cross origin access
app.use(cors());


// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);


// Routes
app.use('/contact', require('./routes/contact'));

app.listen(port, ()=>{
    console.log(`Wincucr Backend listening at http://localhost:${port}`);
});