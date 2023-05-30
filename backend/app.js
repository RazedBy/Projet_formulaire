const express = require('express');
const app = express();
var cors = require('cors');
const port = parseInt(process.env.ATT_DB_PORT || '3306')
const mysql = require("mysql");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      port : port,
      database : 'formulaire'
      
    });
app.use(cors());
app.use(express.json());


db.connect(function(err)
{   if (err)
    throw err;
    console.log("Connecté à la base de données MySQL!");
    
 });


app.get('/userList', (req,res) => {
    db.query('SELECT * FROM users', function (err,result){
        if(err) throw err;
        console.log(result);
        res.json(result);
    })

})

app.get('/userList/:userID',(req,res) => {
    const id = Number(req.params.userID)
    const user = db.query(`SELECT * FROM users WHERE id ='${id}'`)
    if(user){
        console.log(user);
    }else{
        res.status(404).send('User not found');
    }
})

app.put('/userList/:userID',(req,res) => {
    const id = Number(req.params.userID)
    const user = db.query(`SELECT * FROM users WHERE id ='${id}'`)
    if(user){
        db.query(`UPDATE users SET nom = ${req.body.nom}, email = ${req.body.email}, password = ${req.body.password}, description = ${req.body.description} WHERE id = ${id} `)
        return res.status(200).send('User Up-to-date !')
    }else{
        return res.status(404).send('User not found');
    }
})

app.post('/addUser', (req,res) => {
    console.log(req.body.name,req.body.email,req.body.password,req.body.description)
    db.query(`INSERT INTO users (id,nom,email,password,description) VALUES (null,'${req.body.name.toString()}','${req.body.email.toString()}','${req.body.password.toString()}','${req.body.description.toString()}')`, function (err,result){
        if(err) throw err;
        res.status(201).send({message : "User Added : "+ req.body.name})
    })
})

app.delete('/userList/:userId', (req,res) =>{
    const id = Number(req.params.userId)
    const user = db.query(`SELECT * FROM users WHERE id = '${id}'`);
    if(user){
        db.query(`DELETE FROM users WHERE id = '${id}'`)
        return res.status(200).send('User Deleted !')
    }else{
        res.status(404).send('User not found !')
    }
})




app.listen(3000);
module.exports = app;
