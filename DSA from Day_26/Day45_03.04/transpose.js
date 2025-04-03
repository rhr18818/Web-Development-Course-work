var matrix = [[2,4,-1],[-10,5,11],[18,-7,6]]

var ans = Array.from({length: matrix[0].length},()=> Array(matrix.length))

// Note: Array() can be called with or without "new". Both create a "new" Array instance

for(let i=0;i<ans.length;i++){
    for(let j=0;j<ans[i].length;j++){
        ans[i][j] = matrix[j][i]
    }
}
console.log(ans);
