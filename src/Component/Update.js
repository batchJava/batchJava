import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {getStudDetailsById,updateStudDetailsById} from "../Services/StudentService"

const Update=()=>
{
    const [Name,setName]=useState("");
    const [Age,setAge]=useState("");
    const [Gender,setGender]=useState("");

    const {id}=useParams();

    const nav=useNavigate();

    const updateProcess=(e)=>
    {
        e.preventDefault();
        const student={name:Name,age:Age,gender:Gender};
        updateStudDetailsById(id,student).then((responce)=>{
            console.log(responce.data);
            nav("/success");
        }).catch((error)=>
        {
            console.error(error);
            nav("/error");
        })
    }
    useEffect(()=>
    {
        if(id)
        {
            console.log("update Runing!!!");
            getStudDetailsById(id).then((responce)=>
            {
                console.log(responce.data);
                setName(responce.data.name);
                setAge(responce.data.age);
                setGender(responce.data.gender);
            }).catch((error)=>
            {
                console.error(error);
                nav("/error");
            })
        }  
    },[id])
    return(
        <>
            <form>
                <label>Name:</label>
                <br></br>
                <input type="text" name="name" value={Name} onChange={(e)=>setName(e.target.value)}/>
                <br></br>
                <br></br>
                <label>Age:</label>
                <br></br>
                <input type="text" name="age" value={Age} onChange={(e)=>setAge(e.target.value)}/>
                <br></br>
                <br></br>
                <label>Gender</label>
                <br></br>
                <input type="text" name="gender" value={Gender} onChange={(e)=>setGender(e.target.value)}/>
                <br></br>
                <br></br>
                <button onClick={updateProcess}>Submit</button>                
            </form>
        </>
    )
}

export default Update;