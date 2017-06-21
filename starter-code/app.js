const express = require('express');
// Create server named app
// Express server handling requests and responses
const app = express();

app.set('view engine' , 'ejs');

app.use(express.static('assets'));

app.listen(3000, () => {
  console.log('App listening on port 3000.');
});

// ROUTE
//  is an address (url) that you can visit on this application
// localhost:3000/the homepage
// anonymous function determines the code that is run
// when you visit the URL (address)
// when you visit this address you see the content you are pointing to

let visitCount = 0;

app.get('/', (request, response, next) => {

  visitCount += 1;
  console.log(visitCount + ' have have viewed this site.');

    response.render('home.ejs');
});



app.get('/about', (request, response, next) => {

  visitCount += 1;
  console.log(visitCount + ' have have viewed this site.');

    response.render('about.ejs');
});

app.get('/fun', (request, response, next) => {

  visitCount += 1;
  console.log(visitCount + ' have have viewed this site.');

    response.render('fun.ejs');
});
