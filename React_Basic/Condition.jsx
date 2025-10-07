const Condition=({students}) =>{
    return(
         <>
        {
            students.map((student)=>{
                if(student.is_student==true){
                    return(
                         <>
                <div>{student.Name}</div>
                <div>{student.place}</div>
                <div>{String(student.is_student)}</div>
                </>
                    )
                }
        }
    )
}
         </>
    );
};
export default Condition;