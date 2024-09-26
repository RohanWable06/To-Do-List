const connection=require("mysql");

var newConnection=connection.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'*****',
    database:'task_track',
    port:3306
})

newConnection.connect((error)=>{
    if(!error){
        console.log("Connection done")
    }
    else{
        console.log("Connection error")
    }
})

module.exports=newConnection;
