const express = require('express');
const app = express();
const port = 3000;
const { faker } = require('@faker-js/faker');

app.use(express.json());//to access req.body

const tasks = [];

let i = 1;

function random_boolean(){
    return Math.round(Math.random());
}

while(i<101){
    tasks.push({id:i, content:faker.lorem.sentence(), completed:random_boolean()});
    i++;
}

app.get('/', (req,res,next)=>{
    res.json({message:"Welcome to the fake API"});
});

//TODO:CRUD routes for Task Resource

app.get('/tasks', (req,res,next)=>{

    if(req.query.completed){

        const {completed} = req.query;

        if(completed !== true && completed !== false && completed !== 1 && completed !== 0 && completed!=="0" && completed!=="1" && completed!=="true" && completed!=="false") res.sendStatus(400);

        const filtered_tasks = tasks.filter(element => element.completed === Number(completed));
        
        res.json(filtered_tasks);
    
    }else{
        res.json(tasks);
    }

});

app.get('/tasks/:id', (req,res,next)=>{

    const {id} = req.params;

    const found_task = tasks.find(element => element.id === Number(id));

    if(found_task){
        res.json(found_task);
    }else{
        res.sendStatus(404);
    }

});

app.listen(port, () => {
    console.log(`Fake API listening on port ${port}`);
});