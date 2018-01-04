//Did you use npm install to
//add all these packages
//to our project?
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;





// Requires the candyRouter file to establish backend route endpoints
var candyRouter = require('./candyRouter');

app.use(bodyParser.json());

//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use

//sets url to localhost:3000/candies to be used with candyRouter endpoints
app.use('/candies', candyRouter);



app.listen(PORT, function(){
	console.log('connected');
});

//app.listen(3000);