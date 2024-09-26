const express=require("express");
const myroute=express.Router();
const dbConnection=


myroute.get("/task",function(request, response){
    dbConnection.query("select * from task",function(error,data){

        if(error){
            response.status(500).send("no Task available");
        }
        else{
            response.status(200).json(data);
        }
    }
    )
})

myroute.get("/task/:id",function(request, response){
    dbConnection.query("select * from task where id=?",[request.params.id],function(error,data){

        if(error){
            response.status(500).send("Task not available");
        }
        else{
            response.status(200).json(data);
        }
    }
    )
})


myrouter.post("/addtask",function(req,resp){
    connection.query("insert into task values(?,?,?,?,?,?)",[req.body.id,req.body.user,req.body.status,req.body.due_date,req.body.priority,req.body.comments],function(err,result){
        if(err){
            resp.status(500).send("error occured")
        }else{
            //request will be redirected to products url, to show the table
            if(result.affectedRows>0){
                resp.status(200);
            }
        }

    })
})



myrouter.post("/updatetask/:id",function(req,resp){
    connection.query("update product set user=?,status=?,due_date=?, priority=?,comments=? where id=?",[req.params.id,req.body.user,req.body.status,req.body.due_date,req.body.priority,req.body.comments],function(err,result){
        if(err){
            resp.status(500).send("error occured")
        }else{
            //request will be redirected to products url, to show the table
            if(result.affectedRows>0){
                resp.status(200);
            }
        }

    })
})



myrouter.get("/deletetask/:id",function(req,resp){
    console.log("pid: ",req.params.id);
    connection.query("delete from task where id=?",[req.params.id],function(err,result){
        if(err){
            resp.status(500).send("task not deleted")
        }
        else{
             //request will be redirected to products url, to show the table
            if(result.affectedRows>0){
                resp.status(200); 
            }
        }

    })

})

module.exports=myroute;