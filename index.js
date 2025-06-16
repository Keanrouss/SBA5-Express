import express from 'express'; //require was difficult
const app = express();

//routes imported from data folder
 import {Users} from './Users.js'
 import {Comments} from './data/comments.js' 
 import {Recipes} from './data/recipes.js'
const port = 3000
//^port where the '/' need to be added at the end follow by Users, comments etc to get info


app.set('view engine', 'ejs');//visual aspect/ install ejs to make work

app.get("/", (req, res) => {
 res.render('view', {Users, Recipes, Comments}); //home page 
 
});
//This show all of the Users in the localhost when entered manually.
app.get('/Users', (req, res)=>{
    res.send({Users});
});
//post user/ required info are email, username, id, name to be a full acceptable request to allow push/
// be sent to Next. 201 status means okay as info in correct format
app.post('/Users', (req, res, next) => {
  const newUser = { id: Users[Users.length-1].id +1, // users length plus 1 once added
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
  }
  Users.push(newUser);
  res.status(201).send(newUser);
});
app.patch('/Users/:id', (req, res) => {
  const user = Users.find(user => user.index == req.params.id); 
  if (!user) return res.status(404).send({ error: "User not found, Try again" });
  Object.assign(user, req.body);
  return(user);
});
app.delete('/users/:id', (req, res) => {
  const user = Users.find(user => user.index == req.params.id);
  if (Users === -1) return res.status(404).send({ error: "User not found" });
  Users.splice(user, 1);
  return({ success });
});

app.get('/comments', (req, res)=>{
    res.send({Comments}); //list all of the comments made on website
});

//to get recipes and can be selection as well. Options to select "title or category" these will trigger recipes
//within those categories
let desiredRecipes = [];
app.get('/recipes', (req, res) => {
  const {title , category } = req.query;
  if (category) {
    desiredRecipes = desiredRecipes.filter(recipe =>
      recipe.category.toLowerCase().includes(category.toLowerCase())
    );
  }
if (title) {
    desiredRecipes = desiredRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(title.toLowerCase()));
      return res.send ({desiredRecipes});
  }
  res.send ({Recipes})
}),
app.post('/recipes', (req, res) => {
  const newRecipe = { id: Users[Users.length-1].id +1, 
    title: req.body.title,
    category: req.body.category,
    instructions: req.body.instructions, };
  Recipes.push(newRecipe);
  res.status(201).send(newRecipe);
});

//error handling
app.use ((error, req, res, next) => {
console.error ('Error')
});
app.listen(port, () => { //port is giving the message that is console.log when there is not /Users or comments 
    //added after the port(3000)
 console.log("Server is running");
})
