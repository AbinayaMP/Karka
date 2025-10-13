const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('Enter your name :',(name)=>{
    rl.question('Enter your username :',(username)=>{
         rl.question('Enter your password :',(password)=>{
    if(name==="Abinaya" && username==="Abinaya" && password==="Abi@123"){
        console.log("You're Welcome")
    }
    else{
        console.log("You're not an admin")
    }
    rl.close()
    })
})
})