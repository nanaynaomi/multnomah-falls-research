/************************************************************************************************* 
  
  Includes and Dependencies
  
*************************************************************************************************/
// Main depencies
const parser = require('body-parser');
const express = require('express');
const hb = require('express-handlebars');
//const session = require('express-session'); 

// Handlers for database entities could go here if I do that
/* What this might look like later:
const Thing = require('./handlers/thing');
*/

/************************************************************************************************* 
  
  Configure the Server
  
*************************************************************************************************/
// Initialize the express server
const app = express();

// Set app to use the Handlebars engine
app.engine('handlebars', hb({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'handlebars');
app.set('view options', {
    layout: 'main'
});

// Pull all style files from the public directory
app.use(express.static('public'));

// Configure body parser to handle request body params
app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));


/************************************************************************************************* 
  
  Routes
  
*************************************************************************************************/

// Index Page
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/personnel', (req, res) => {
  res.render('personnel');
});


app.get('/contact', (req, res) => {
    res.render('contact');
});


// Listen to port 8080
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});