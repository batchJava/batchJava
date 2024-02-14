import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import {getStudDetailsById} from "../Services/StudentService"

const ReadProcess=()=>
{
    const[Id,setId]=useState("");
    const[Name,setName]=useState("");
    const[Age,setAge]=useState("");
    const[Gender,setGender]=useState("");

    const {id}=useParams();
    const nav=useNavigate();

   useEffect(()=>
   {
        if(id)
        {
            console.log("Running!!!!!!");
            getStudDetailsById(id).then((responce)=>
            {
                console.log(responce.data);
                setId(responce.data.id);
                setAge(responce.data.age);
                setGender(responce.data.gender);
                setName(responce.data.name);
            }).catch((error)=>
            {
                console.error(error);
                nav("/error");
            })
        }
   },[id])
    return(
        <div>
            <h1>{id}</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{Id}</td>
                        <td>{Name}</td>
                        <td>{Age}</td>
                        <td>{Gender}</td>
                        <td><button onClick={()=> nav(`/update/${id}`)}>Update</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ReadProcess;