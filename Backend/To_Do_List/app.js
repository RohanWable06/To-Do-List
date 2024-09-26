const express=require("express")
const app=express();
const bodyParser=require("body-parser")
const routes=require("./Routes/Routes")

//define middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//send the routes to file router.js
app.use("/",routes);

app.listen(3002,()=>{
    console.log("server started")
})

module.exports=app;