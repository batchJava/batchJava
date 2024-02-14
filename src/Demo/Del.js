import { useEffect, useRef} from "react";
import { useState } from "react"

const Del=()=>
{
    const inputElement = useRef();
   
   //inputElement.current.value="test"
    //setValue(inputElement)="test"
   // useRef(inputElement).value="test"
    return(
             <input type="text" ref={inputElement} />
        
     
       
            )
   // useRef(inputElement).value="test"
   //inputElement.innerHTML.value="test"
}

// op : 7 

export default Del;


