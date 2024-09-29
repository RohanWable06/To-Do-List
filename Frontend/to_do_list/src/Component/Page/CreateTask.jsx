import { useState } from "react"
import TaskService from "../../TaskService/TaskService";
import { toast, Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

export default function CreateTask(){

    const [task,settask]=useState({});
    const navigate=Navigate();
   
const addTask=()=>{
    TaskService.addtask(task)
    .then=(respone)=>{
        if(respone.status==200){
            toast.success("Task added successfully.");
            navigate('/')
        }
    }
    toast.error("Retry...");

    };
    


    return(
        <div>
            <form>
                <table>
                    <tr>
                        <td>
                            User:
                        </td>
                        <td>
                            <input type="text" className="user" value={task.user} onChange={(e)=>settask({...task,user:e.target.value})} required></input>
                        </td> 
                    </tr>
                    <tr>
                        <td>
                            Status: 
                        </td>
                        <td>
                            <select className="status" value={task.status}  onChange={(e)=>settask({...task,status:e.target.value})} required>
                                <option>Not Started</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                        </td> 
                    </tr>
                    <tr>
                        <td>
                            Due Date:
                        </td>
                        <td> 
                            <input type="date" className="due_date" value={task.due_date} onChange={(e)=>settask({...task,due_date:e.target.value})} required></input>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            Priority: 
                        </td>
                        <td>
                            <select className="priority" value={task.priority}  onChange={(e)=>settask({...task,priority:e.target.value})} required>
                                <option>Low</option>
                                <option>Normal</option>
                                <option>High</option>
                            </select>
                        </td> 
                    </tr>
                    <tr>
                        <td>
                            Comment: 
                        </td>
                        <td>
                            <input type="text" className="comment" value={task.comment} onChange={(e)=>settask({...task,comment:e.target.value})} required></input>
                        </td> 
                    </tr>
            </table>
                <button type="submit" id="button" onClick={addTask()} className="btn-primary">Add Task</button>
            </form>
        </div>
    )
}