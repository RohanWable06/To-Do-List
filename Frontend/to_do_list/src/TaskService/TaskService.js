import axios from "axios";
const url ="http://localhost:3002";

class TaskService{

    getAllTask(){
       return axios.get(url+"/task");
    }
}

export default new TaskService();