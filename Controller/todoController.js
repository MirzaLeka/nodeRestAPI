const bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: false});
const mongoose = require('mongoose');

// Connect to the databse

mongoose.connect('mongodb://test:test123@ds155461.mlab.com:55461/todo');

// Create a schema - this is like a blueprint

var todoSchema = new mongoose.Schema({
item: String
});

// Creating a Todo Model based of previously created schema

var ToDo = mongoose.model('Todo', todoSchema);
var itemOne = ToDo({item: "buy flowers"}).save((err) => {
if (err) {
    return console.log(err);
}
console.log("Item saved!");

});

let data = [
    {item: "get milk"},
    {item: "walk a dog"},
    {item: "kick some ass"}
];

module.exports = (app) => {

app.get('/todo', (req, res) => {
res.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser, (req, res) => {
data.push(req.body);
res.json(data);
});

app.delete('/todo/:item', (req, res) => {
    data = data.filter(function(todo) {
        return todo.item.replace(/ /g, '-' ) != req.params.item;
    });
    res.json(data);
});



};