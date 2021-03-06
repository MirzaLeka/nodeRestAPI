const express = require('express');
var fs = require('fs');
var data = fs.readFileSync('words.json');
var words = JSON.parse(data);

console.log(words);

const app = express();
const PORT = 3000;

const listening = () => console.log("Listening on port: " + PORT);

app.listen(PORT, listening);

app.use(express.static('website'));

app.get('/add/:word/:score?', addWords);

function addWords(req, res) {

	var reply = '';

		var data = req.params;
		var word = data.word;
		var score = Number(data.score);

	//	console.log("Data: " + JSON.stringify(data, undefined, 2)); 
	// data is an object that holds all parameters (path/path) as properties.

		if (!score) {
          reply = {
			msg: 'Score is required!'
			};	
			return	res.send(reply);
		}

		words[word] = score;
		var newData = JSON.stringify(words, undefined, 2);

		fs.writeFile('words.json', newData, (err) => {
			if (err) {
			return console.log("Error found: " + err);
			}
			console.log("Word '" + word + "' saved!")

		});
		

		reply = {
			word,
			score,
			status: 'success'
			};
		
		res.send(reply);
				
}

app.get('/search/:word/', searchWords);

function searchWords(req, res) {
	var data = req.params;
	var word = data.word;
	var reply;
	if (words[word]) {
     	reply = {
			status: 'found',
			word,
			score: words[word]
		};
	} else {
		reply = {
			status: 'not found',
			word
		};
	}

	res.send(reply);


}

app.get('/all', getWords);

function getWords(req, res) {
res.send(words);
}

// :flower works like a variable. what ever we put it it will saerch it 
// we use :num to decide how many times we'll  send the response