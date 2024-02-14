import { useNavigate, useParams } from "react-router-dom"
import {deleteStudDetailsById} from "../Services/StudentService"

const Delete=()=>
{
    const {id}=useParams();
    const nav=useNavigate();
    const deleteProcess=()=>
    {
        if(id)
        {
            deleteStudDetailsById(id).then((responce)=>
            {
                console.log(responce.data);
                nav("/success");
            }).catch((error)=>
            {
                console.error(error);
                nav("/error");
            })
        }
    }
    return(
        <center>
            <h1>"Do you really want to execute "
                <span><a href="#" onClick={deleteProcess}>Confirm</a></span>
            </h1>
        </center>
    )
}


export default Delete;