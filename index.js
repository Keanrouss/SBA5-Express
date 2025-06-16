import express from 'express';
const app = express();
 import {Users} from './Users.js'
const port = 3000
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
 res.render('view', {Users});
 
});
app.get('/users', (req, res)=>{
    res.send({Users});
});

app.listen(port, () => {
 console.log("Server is running");
});
//app.post('Users/')