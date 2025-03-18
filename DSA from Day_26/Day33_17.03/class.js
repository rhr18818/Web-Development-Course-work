var char = 'A'
for (var i=1;i<=5;i++){
    for(var j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(65 + j-1) + " ")/// 'A'.charCodeAt() => 65 
    }
    console.log();
    
}

// console.log('ABBBA'.charCodeAt(4));
