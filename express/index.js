
const express = require("express");
const fs = require("fs");

// const users = [{
//     name: "ace",
//     kidneys : [{
//         healthy: false
//     },{
//         healthy: true
//     }]
// }];

const app = express();
//app.use(express.json());

// app.get('/',function(req, res){
//     const aceKidneys = users[0].kidneys.length;
//     let healthy = 0;
//     for (let i = 0; i < users[0].kidneys.length; i++) {
//         if(users[0].kidneys[i].healthy)healthy++;
//     }        
//     const unhealthy = aceKidneys - healthy;
//     res.send(`you have ${aceKidneys} kidney${aceKidneys>1?"s":""}, ${unhealthy} unhealthy kidney${unhealthy>1?"s":""} and ${healthy} healthy kidney${healthy>1?"s":""} `)
// })

// app.post('/',function(req,res){
//     const kidney = req.body.healthy;
//     console.log(kidney);
//     users[0].kidneys.push({
//         healthy:kidney
//     });
//     res.sendStatus(200)
// })

// app.put('/',function(req,res){
//     for(let i=0;i<users[0].kidneys.length;i++){
//         if(!users[0].kidneys[i].healthy){
//             users[0].kidneys[i].healthy = true;
//         }
//     }
//     res.sendStatus(200);
// })

// app.delete('/',function(req,res){
//     let newKidneys= [];
//     for(let i=0;i<users[0].kidneys.length;i++){
//         if(users[0].kidneys[i].healthy){
//             newKidneys.push(users[0].kidneys[i])
//         }
//     }
//     users[0].kidneys = newKidneys;
//     res.sendStatus(200);
// })

app.get('/files',function(req,res){
    const path = "files";
    console.log(path);
    
    fs.readdir(path,function(err,files){
        console.log(files);
        if(err){
            res.send(err);
        }else{
            res.json(files);
        }
    })
})

app.get("/files/:fileName",function(req,res){
    const name = req.params.fileName;
    const path = "files/"+name;
    fs.readFile(path,"utf-8",function(err,data){
        if(err){
            res.send(err);
        }
        res.json({data});
        console.log(data);
    })
})

app.listen(3000);