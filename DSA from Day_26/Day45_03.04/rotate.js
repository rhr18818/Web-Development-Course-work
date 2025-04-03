var matrix = [[2,4,-1],[-10,5,11],[18,-7,6]]

//var ans = Array.from({length: matrix[0].length},()=> Array(matrix.length))

// Note: Array() can be called with or without "new". Both create a "new" Array instance

for(let i=0;i<matrix.length;i++){
    for(let j=0+i;j<matrix[i].length;j++){ //j=0+i -> if not this, will swap two time and will remain same !!
        // ans[i][j] = matrix[j][i]
        [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
    }
}
for(let i=0;i<matrix.length;i++){
    let a=0;
    let b=matrix[i].length-1
    while(a<b){
        [matrix[i][a],matrix[i][b]] = [matrix[i][b],matrix[i][a]]
        a++
        b--
    }
}
console.log(matrix);
