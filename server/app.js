const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3001;

let items = [];
let workItems = [];

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
   

    res.render('list', {listTitle: day, newListItems: items});
});
app.post('/', (req, res) => {
    let item = req.body.newItem;

    if (req.body.list === 'Work'){
        workItems.push(item);
        res.redirect('/Work');
        

    } else {
        items.push(item);
        res.redirect('/');
    }

});
app.get('/Work', (req, res) => {
    res.render('list', {listTitle: "Work List", newListItems: workItems});
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3001, ()=>{
    console.log(`App is running on port ${port}`);
});