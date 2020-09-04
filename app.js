const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('.'));

const names = [];

function getRank()
{
    return Math.random();
}

app.get('/api/names',(req,res) => {
    res.send(names);
});
app.post('/api/names', (req,res)=> {
    if (!req.body.name || req.body.name.length < 3){
        // 404 Bad request
        res.status(400).send("name is required and should be min 3 char long");
        return;
    }

    const userName = {
        id: names.length + 1,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        rank: getRank()
    };
    names.push(userName);
    console.log(names);
    res.send(userName);
});
// /api/courses/course 1
app.get('/api/names/:id', (req,res)=> {
    const name = names.find(c => c.id === parseInt(req.params.id));
    if (!name) res.status(404).send('The name with the given ID was not found')
    res.send(name);
});
// Ports
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
