import { useState } from "react"

const Hooks=()=>{
    const[value,setValue]=useState("blue")
    const handle_click=()=>{
        setValue(value==="blue"?"red":"green")
    }
    return(
        <>
        <p style={{height:"100px",width:"100%",backgroundColor:value}}></p>
        <button onClick={handle_click}>Change</button>
        </> 
        
    )
}
export default Hooks