const fs = require('fs')
const express = require('express')
const app = express()

app.get('/')

fs.readFile('db.json', (err, data) =>{
    if(!err){
        const myJSON = JSON.parse(data)
        console.log(myJSON)
        app.get('/', function(req,res){
            res.send(myJSON)
        })
    }
    else{
        console.log('error reading json file')
    }
})

app.listen(3000)