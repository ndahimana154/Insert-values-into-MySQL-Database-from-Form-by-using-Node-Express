const mysql = require("mysql");
const hostName = 'localhost'
const userName = 'root'
const passWord = ''
var conn = mysql.createConnection({
    host: hostName,
    user: userName,
    pw: "",
})
conn.connect((err) => {
    if(err) {
        console(`Connection failed due to: ${err}`)
    }
    else{
        console.log(`Connection to server succed`);
    }
})
module.exports = conn