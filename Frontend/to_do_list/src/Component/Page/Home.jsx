import React ,{ useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom";
import TaskService from "../../TaskService/TaskService";

  const Home=()=>{

    const[tasks,settasks]=useState([]);
   const [search,setsearch]=useState("");
   const navigate=Navigate;

    useEffect(()=>{
        //fetch();
        // TaskService.getAllTask()
        // .then((result)=>{
        //     settasks(result.data)            
        // })
        // .catch((err)=>{
        //     navigate('/home')
        // })
    },[])


    useEffect(()=>{
        if(search===""){
            settasks([...tasks])
        }else{
            var newarr=tasks.filter(ob=>ob.user.includes(search));
            settasks(newarr);
        }
    },[search])


    // const fetch=()=>{
    //     TaskService.getAllTask()
    //     .then((result)=>{
    //         settasks(result.data)            
    //     })
    //     .catch((err)=>{
    //         navigate('/home')
    //     })
    // }


    // const deleteData=(id)=>{
    //     TaskService.delete(id);
    //     fetch();
    // }
    const findTask=(event)=>{
        setsearch(event.target.value)
    }
    return(
        <div style={{marginTop:40}}><br></br>
        
            <h4 className="tasks">Task List</h4>

            <div style={{marginTop:40}}>
            Search <input type="text" name="search" id="search"
                value={search}
                onChange={findTask} ></input><br></br>
                <ul>(Search by User)</ul>
            </div>
            <table border='2' className="table" style={{marginTop:20}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Priority</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(b=><tr>
                        <td>{b.id}</td>
                        <td>{b.name}</td>
                        <td>{b.status}</td>
                        <td>{b.due_date}</td>
                        <td>{b.priority}</td>
                        <td>{b.comments}</td>
                        {/* <td>
                            <button type="button" name="delete" id="delete" onClick={()=>{deleteData(b.id)}}>Delete</button>
                            <Link to={`/edit/${b.id}`} state={{book:b}}>
                            <button type="button" name="edit" id="edit" >Update</button>
                            </Link>
                            <Link to={`/view/${b.id}`} state={{book:b}}>
                            <button type="button" name="view" id="view">View</button>
                            </Link>
                        </td> */}
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default Home;