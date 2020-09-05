const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

const names = [];

function getRank(electric,gas,oil,milage,flf,fmf,rnp,rc)
{
    let sum = ((electric * 105) + (gas * 105) + (oil * 113) + (milage * 0.79) + (flf * 1100) + (fmf * 4400));
    if (!rnp && !rc) sum += 150;
    return sum;
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
    let flf = req.body.lessThan4HourFlights;
    let fmf = req.body.moreThan4HourFlights;
    let rnp = req.body.newspaperRecycle;
    let rc =  req.body.recycleCans;

    const userName = {
        id: names.length + 1,
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        email : req.body.email,
        electric: e,
        gas: g,
        oil: o,
        milage: m,
        newspaperRecycle : rnp,
        recycleCans : rc,
        rank: getRank(e,g,o,m,flf,fmf,rnp,rc)
    };

    names.push(userName);
    console.log(userName);
    res.send(userName);
});
// /api/names/name1
app.get('/api/names/:id', (req,res)=> {
    const name = names.find(c => c.id === parseInt(req.params.id));
    if (!name) res.status(404).send('The name with the given ID was not found')
    res.send(name);
});
// Ports
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
