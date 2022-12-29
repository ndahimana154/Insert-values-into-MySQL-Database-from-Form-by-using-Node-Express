const express = require("express")
const path = require("path")
const app = express()
// Then initialize the express to parse JSON data to get the form data, 
// the form data is nested data so we also have to specify the URL 
// encoding as extended true.
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
const http = require('http');
var dbconn = require("./db.js")
// Connecting to the port
portNo = 9000
app.listen(portNo, () =>{
    console.log(`Server started at port ${portNo}`)
})


// Sending the index.html file by default
app.get('/',(req, res) => {
    var options = {
        root: path.join(__dirname)
    };
    var fileName = 'home.html'
    res.sendFile(fileName, options,(err) => {
        if(err) throw err;
        console.log(`Form  file sent successfully`);
    } )
})
app.post("/newUser", (req, res) => {
    const names = req.body.names;
    const email = req.body.email;
    const message = req.body.msg;
});
// var insertQuery = `INSERT into users values(null,'${names}','${email}','${message}',now())`
    dbconn.query(`INSERT into users values(null,'${names}','${email}','${message}',now())`, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Data inserted successfully")
        }
    })

// Send files easily
// app.get("/", (req, res) => {
//       res.sendFile(__dirname + "/index.html");
// });