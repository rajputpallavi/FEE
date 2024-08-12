const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

rl.question('enter your name:',(input)=>{
    console.log('Your name is: ${input}');
    rl.close();
})