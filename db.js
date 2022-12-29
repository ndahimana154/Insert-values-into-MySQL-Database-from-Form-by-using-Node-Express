const mysql = require("mysql");
const hostName = 'localhost'
const userName = 'root'
const passWord = ''
const dataBase = 'valuesdb'
var conn = mysql.createConnection({
    host: hostName,
    user: userName,
    pw: "",
    db: dataBase
})
conn.connect((err) => {
    if(err) {
        console(`Connection failed due to: ${err}`)
    }
    else{
        console.log(`Connection to ${dataBase} succed`);
    }
})
module.exports = conn