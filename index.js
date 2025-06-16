import express from 'express';
const app = express();
 import {Users} from './Users.js'
 import {Comments} from './data/comments.js'
 import {Recipes} from './data/recipes.js'
const port = 3000

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
 res.render('view', {Users, Recipes, Comments});
 
});
app.get('/Users', (req, res)=>{
    res.send({Users});
});

app.listen(port, () => {
 console.log("Server is running");
});
//app.post('Users/')