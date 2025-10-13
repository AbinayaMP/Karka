const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question('Enter Num1 :',(ans1)=>{
    console.log(' Num1 :'+ans1)
    rl.question('Enter Num2 :',(ans2)=>{
    console.log(' Num2 :'+ans2)
    console.log( Number(ans1)+ Number(ans2))
    rl.close()
    })
})