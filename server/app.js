const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let today = new Date();
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let day = today.toLocaleDateString('en-US', options);
   

    res.render('list', {day: day});
});

app.listen(3001, ()=>{
    console.log(`App is running on port ${port}`);
});