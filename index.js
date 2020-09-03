const express = require('express');
const app = express();

app.use(express.json());

const names = [
    {fPIndex: 1, name: 'Harsha'},
    {fPIndex: 1, name: 'Jane'},
    {fPIndex: 1, name: 'Jill'}
];

app.get('/',(req,res)=> {
    res.send('Welcome to C02 Calculator Page');
});
app.get('/api/name',(req,res) =>{
    res.send([1,2,3]);
});
app.post('/api/names', (req,res)=>{
    if (!req.body.name || req.body.name.length < 3){
        // 404 Bad request
        res.status(400).send("name is required and should be min 3 char long");
        return;
    }
    const name ={
        id: name.length + 1,
        name: req.body.name
    };
    names.push(name);
    res.send(course);
});
// /api/courses/course 1
app.get('/api/names/:fPIndex', (req,res)=>{
const name = names.find(c => c.fPIndex === parseInt(req.params.fPIndex));
if (!name) res.status(404).send('The course with the given ID was not found')
res.send(course);
});
app.put('/api/names/fPIndex', (rer,res)=>{

})
// Ports
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
