const prompt = require('prompt-sync')();

var n = Number(prompt("Enter row Number : "))

for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i;j++){
        process.stdout.write(' ');
    }
    for(let j=1;j<=i;j++){
        process.stdout.write(j+'')
    }
    for(let j=i-1;j>=1;j--){
        process.stdout.write(j+'')
    }
    

    console.log();
    
}