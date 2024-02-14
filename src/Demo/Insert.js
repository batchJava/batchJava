import { useState } from "react"
import { useNavigate } from "react-router-dom";
import {CreateStudDetails} from "../Services/StudentService"

const Insert=()=>
{
    const[Name,setName]=useState("");
    const[Age,setAge]=useState("");
    const[Gender,setGender]=useState("");

    const nav=useNavigate();

    function insertProcess(e)
    {
        e.preventDefault();

        console.log("Insert Process Running!!!!!!!");
        const student={name:Name,age:Age,gender:Gender};
        console.log(student);
        CreateStudDetails(student).then((response) => {
            console.log(response.data);
            nav('/success');
        }).catch(error => {
            console.error(error);
            nav('/error');
        }) 
    }

    return(
        <div>
            <form>
                <label>Name:<input type="text" name="name" onChange={(e)=>setName(e.target.value)}/></label>
                <br></br>
                <br></br>
                <label>Age:<input type="text" name="age" onChange={(e)=>setAge(e.target.value)}/></label>
                <br></br>
                <br></br>
                <label>Gender:<input type="text" name="gender" onChange={(e)=>setGender(e.target.value)}/></label>
                <br></br>
                <br></br>
                <button  onClick={insertProcess} >Submit</button>
            </form>
        </div>
    )
}

export default Insert;