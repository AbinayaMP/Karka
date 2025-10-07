const Card=(props)=>{
    return(
        <>
        <div id="parent">
            <img src={props.img} style={{height:"300px",width:"300px",padding:"10px",paddingLeft:"190px"}}></img>
            <h1 style={{textAlign:"center"}}>{props.title}</h1>
            <p>{props.para}</p>
            
        </div>
        </>
    )
}
export default Card;