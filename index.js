const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/',(req,res)=> {
    res.send('Hello World');
});
app.get('/api/courses',(req,res) =>{
    res.send([1,2,3]);
});
app.post('/api/courses', (req,res)=>{
    if (!req.body.name || req.body.name.length < 3){
        // 404 Bad request
        res.status(400).send('Name is required and should be minimum 3 characters long!');
        return;
    }
    const course ={
        id: course.length + 1,
        name: req.cody.name
    };
    courses.push(course);
    res.send(course);
});
// /api/courses/course 1
app.get('/api/courses/:id', (req,res)=>{
const course = courses.find(c => c.id === parseInt(req.params.id));
if (!course) res.status(404).send('The course with the given ID was not found')
res.send(course);
});

// Ports
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
