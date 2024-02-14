import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Read=()=>
{
    const[Id,setId]=useState("");
    const nav=useNavigate();
    const ReadNav=()=>
    {
        nav(`/readProcess/${Id}`);//"/readProcess"+id+"/"
    }
    
    return(
        <div>
            <form>
                <label>Id:</label>
                <br></br>
                <input type="text" name="id" onChange={(e)=>setId(e.target.value)}/>
                <br></br>
                <button onClick={ReadNav} >submit</button>
            </form>
            
        </div>
    )
}

export default Read;