const express = require ('express');

const app = express();

//Routs 
//created rout to with get method that sends message
app.get('/', (req,res)=> {
    res.send("We are on home port");
});
//Routs 2
//created another rout inside root with get method that sends message
app.get('/post', (req,res)=> {
    res.send("We are on post");
});

//Starting express listener
app.listen(process.env.PORT || 3000);