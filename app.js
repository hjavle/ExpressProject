const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const names = [];

function getRank(electric,gas,oil,milage)
{
    return electric + gas + oil + milage;
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

    let e = req.body.electric;
    let g = req.body.gas;
    let o = req.body.oil;
    let m = req.body.milage;

    const userName = {
        id: names.length + 1,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email : req.body.email,
        electric: e,
        gas: g,
        oil: o,
        milage: m,
        rank: getRank(e,g,o,m)
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
