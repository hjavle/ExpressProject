const express = require('express');
const app = express();

app.use(express.json());

const names = [];

app.get('/',(req,res)=> {
    res.send('Welcome to C02 Calculator Page');
});
app.get('/api/names',(req,res) =>{
    res.send(names);
});
app.post('/api/names', (req,res)=>{
    if (!req.body.name || req.body.name.length < 3){
        // 404 Bad request
        res.status(400).send("name is required and should be min 3 char long");
        return;
    }
    const name ={
        id: names.length + 1,
        name: req.body.name
    };
    names.push(name);
    console.log(names);
    res.send(name);
});
// /api/courses/course 1
app.get('/api/names/:id', (req,res)=>{
const name = names.find(c => c.id === parseInt(req.params.id));
if (!name) res.status(404).send('The name with the given ID was not found')
res.send(name);
});
app.put('/api/names/fPIndex', (rer,res)=>{

})
// Ports
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));