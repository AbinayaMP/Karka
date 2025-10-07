const Map=({person}) =>{
    return(
         <>
        {
            person.map((user)=>{
                if(user.age>20){
                    return(
                         <>
                <div>{user.Name}</div>
                <div>{user.age}</div>
                </>
                    )
                }
        }
    )
}
         </>
    );
};
export default Map; 