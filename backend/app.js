const express = require('express');
const app = express();
const port = 3000;
const GOOGLE_API_KEY = process.env.WINCUCR_GOOGLE_API_KEY;

app.listen(port, ()=>{
    console.log(`Wincucr Backend listening at http://localhost:${port}`);
});