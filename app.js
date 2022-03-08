const express = require('express');
const app = express();
const port = 3000;
const { faker } = require('@faker-js/faker');

app.use(express.json());//to access req.body

const tasks = [];

let i = 0;

function random_boolean(){
    return Math.round(Math.random());
}

while(i<100){
    tasks.push({id:i+1, content:faker.lorem.sentence(), completed:random_boolean()});
    i++;
}

app.get('/', (req,res,next)=>{
    res.json({message:"Welcome to the fake API"});
});

//TODO:CRUD routes for Task Resource

app.get('/tasks', (req,res,next)=>{
    res.json(tasks);
});

app.listen(port, () => {
    console.log(`Fake API listening on port ${port}`);
});