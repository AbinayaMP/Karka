async function fetchData(){
    try{
        let data=await fetch( 'https://jsonplaceholder.typicode.com/todos/1' );
        let res=await data.json();
        console.log('{');
        for (let key in res){
            console.log(`${key}:${JSON.stringify(res[key])},`)
        }
        console.log('}');
    }
    catch(e){
        console.log(e)
    }
}
fetchData()