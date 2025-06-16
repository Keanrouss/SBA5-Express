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
app.get('/comments', (req, res)=>{
    res.send({Comments}); //list all of the comments made on website
});
//to handle an error if wrong request is sent
//app.use(error, req, res, next)=> {

//}
app.listen(port, () => { //port is giving the message that is console.log when there is not /Users or comments 
    //added after the port(3000)
 console.log("Server is running");
});
