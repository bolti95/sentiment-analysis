// import all required modules for express
// npm i express
//npm i express-handlebars
//npm i body-parser
const express = require('express');
const hbs = require('express-handlebars');
const nlpModule = require('./lib/nlpModule')
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
require('dotenv').config();

//path works with file paths and allows us to stitch two file paths together 


app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'layout',
}));
//creating a view engine - lets us display data only availabl on the server
//building the engine
//creates a config 
app.set('view engine', '.hbs');
//using the engine
app.use(express.static(path.join(__dirname, 'public')));
//tells express to use something... the static part is saying, set folder to contain static content
//path.join sets path to the directory name 'public' 
//use is done to use the code 
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// tells express that bodyparser exists and to use it , allows us to access form data

app.get('/', async (req, res) => {

    res.render('index', {title: 'welcome'})
})


app.post('/', async (req, res) => {  
    // we can write any JS in these functions   
    let textString = await nlpModule(req.body.userInput);
    console.log(textString)
    res.render('index', );
})

//rules that decide what the user can do 
//you can use two res.renders but can only have two values within res.render
// servers can't resoibd more than once per client request



app.listen(3006, () => {
    //we need to tell express that the server is running and listening to a port 
    console.log('Server listening on port 3006');
    console.log(__dirname);
})