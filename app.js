const express = require('express');

const fs = require('fs');



const app = express();
app.use(express.json())

app.get('/api/students', function(req, res){
    fs.readFile('./db.json', 'utf-8', function(err, data){
        const students = JSON.parse(data);
        res.send(students);
    })
})


app.post('/api/students', (req, res)=>{
    const student = req.body;
    fs.readFile('./db.json', 'utf-8', (err, data)=>{
        const students= JSON.parse(data);
        students.push(student);
    fs.writeFile('./db.json', JSON.stringify(students), (err)=>{
        res.send(students);
    })
    })

})

app.listen(8000, ()=>{
    console.log("Server run success")
})


