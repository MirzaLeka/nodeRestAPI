const express = require('express');
const app = express();

const PORT = 3000;

const listening = () => console.log("Listening on port: " + PORT);

app.listen(PORT, listening);

app.use(express.static('website'));

app.get('/search/:flower/:num', (req, res) => {
var data = req.params;
var num = data.num;

var reply = "";

for (var i = 0; i < num; i++) {
	reply+= "I love " + data.flower + "  too <br>";
}

res.send(reply);

});

// :flower works like a variable. what ever we put it it will saerch it 
// we use :num to decide how many times we'll  send the response