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

var Todo = mongoose.model('Todo', todoSchema);
// var itemOne = ToDo({item: "buy flowers"}).save((err) => {
// if (err) {
//     return console.log(err);
// }
// console.log("Item saved!");

// });

// let data = [
//     {item: "get milk"},
//     {item: "walk a dog"},
//     {item: "kick some ass"}
// ];

module.exports = (app) => {

// Get data from mongoDB and pass it to the view
// Data we are getting is a Todo, which connected to DB


app.get('/todo', (req, res) => {

Todo.find({}, (err,data)=>{
if (err) {
    return console.log(err);
}
res.render('todo', {todos: data});
});

});

// Get data from the view and add it to the mongoDB

app.post('/todo', urlencodedParser, (req, res) => {

let newTodo = Todo(req.body).save((err, data) => {
if (err) throw err;
res.json(data);
}); 

});

// Delete the requested item from mongoDB

app.delete('/todo/:item', (req, res) => {

        Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data) => {
            if (err) throw err;
            res.json(data);
        });
      

});



};