var matrix = [[1,1,0],[1,0,1],[0,0,0]]

var ans = matrix.map((a)=> a.reverse().map((b)=> 1^b))

console.log(ans);
