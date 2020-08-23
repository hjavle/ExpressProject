const express = require ('express');

const app = express();

//Routs
app.get('/', (req,res)=> {
    res.send("We are on home port");
});
//Starting express listener
app.listen(3000);