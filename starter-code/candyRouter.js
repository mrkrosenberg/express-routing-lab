var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [
		{
			id : 1,
			name : 'Skittles',
			color : 'All'
		},
		{
			id : 2,
			name : 'Milky Way',
			color : 'Brown',
		},
		{
			id : 3,
			name : 'Mentos',
			color : 'White'
		},
		{
			id : 4,
			name : 'Licorice',
			color : 'Red'
		}
	];

//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// Index
	res.json(candies);
});

router.get('/:id', function(req, res){
	// Show
	//loops through candy array to find the matching id
	for (i = 0; i < candies.length; i++){
		if (candies[i].id == req.params.id) {
			res.json(candies[i]);
		}
	}

});

router.post('/', function(req, res){
	// Create
	console.log(req.body);
	req.body.id = candies.length + 1;
	candies.push(req.body);
	res.json(candies);
});

router.put('/:id', function(req, res){
	// Update
	for (i = 0; i < candies.length; i++) {
		if (candies[i].id == req.params.id) {
			candies[i].name = req.body.name;
			candies[i].color = req.body.color;
		} else {
			console.log('candy not found');
			res.send('Cannot find candy at id ' + req.params.id);
		}
	}

	res.json(candies);
});

router.delete('/:id', function(req, res){
	for(i = 0; i < candies.length; i++){
		if (candies[i].id == req.params.id){
			candies.splice(i, 1);
		}
	}
	res.json(candies);
});


module.exports = router;



