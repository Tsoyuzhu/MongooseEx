var express = require('express'),
    bodyparser = require('body-parser'),
    mongoose = require('mongoose');

app = express();
// We want to use Pug to render our frontend files.
app.set('view engine', 'pug');
// Connect mongoose to the mongo database.
mongoose.connect('mongodb://localhost:27017/mongooseEx');
// Need this line to make body parser work with our app.
app.use(bodyparser.urlencoded({extended: true}));

// For a larger app, we would save the schemas in a separate file but since its an 
// exercise its okay to define it here. Remember: Schemas tell the database what the 
// data you are saving should look like.
var todoSchema = new mongoose.Schema({
    task: String
})
// This makes the actual collection from the schema. A collection is where all the 
// 'Todo' database entries are stored.
var Todo = mongoose.model('Todo', todoSchema);

// Here is how to find stuff from the database:
// https://mongoosejs.com/docs/api.html#model_Model.find
app.get('/', function(req,res) {
    /* Instructions to complete this:
    1. Use the find function to query the database for all existing todos
    2. Rewrite the code so that res.render is called with the todos passed to the view. 
        HINT for 2: It should look like res.render('index', {todosFound:todosFound})
    */

    // Your code goes here
    res.render('index');
})

// Here is how to save stuff to the database: 
// https://mongoosejs.com/docs/models.html

app.post('/addTodo', function(req,res) {
    /* Instructions to complete this:
    1. Extract the task from the form using body parser.
    2. Define a new Todo document (more info in the link above)
    3. Save it to the database
    4. Redirect back to the index ('/') page. I've already done this step for you.
    */

    // Yout code goes here
    res.redirect('/');
})

app.listen(3000, function() {
    console.log("The mongoose Exercise app is running on localhost:3000");
})