const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
let items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    let today = new Date();
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let day = today.toLocaleDateString('en-US', options);
   

    res.render('list', {day: day, newListItems: items});
});
app.post('/', (req, res) => {
    let item = req.body.newItem;
    items.push(item);
    res.redirect('/');

});

app.listen(3001, ()=>{
    console.log(`App is running on port ${port}`);
});