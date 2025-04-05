var mat = [[0,1],[1,0]]
var target = [[1,0],[0,1]]


var findRotation = function(mat, target) {
    var c = Array.from({length:4},()=> true)
    //console.log(c);
    var n = mat.length
    var temp = Array.from({length:target.length},()=> Array(target[0].length))
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(mat[i][j]!=target[i][j]) c[0]=false;
			if(mat[i][j]!=target[n-j-1][i]) c[1]=false;
			if(mat[i][j]!=target[n-i-1][n-j-1]) c[2]=false;
			if(mat[i][j]!=target[j][n-i-1]) c[3]=false;

            //check
            temp[i][j] = target[n-j-1][i]

        }
    }
    console.log(mat,target,temp);
    
    	return c[0]||c[1]||c[2]||c[3];

};

var ans = findRotation(mat,target)

console.log(ans);


// bool c[4];
// 	memset(c,true,sizeof(c));
// 	int n=mat.size();
// 	for(int i=0;i<n;i++)
// 	{
// 		for(int j=0;j<n;j++)
// 		{
// 			if(mat[i][j]!=target[i][j]) c[0]=false;
// 			if(mat[i][j]!=target[n-j-1][i]) c[1]=false;
// 			if(mat[i][j]!=target[n-i-1][n-j-1]) c[2]=false;
// 			if(mat[i][j]!=target[j][n-i-1]) c[3]=false;
// 		}
// 	}
// 	return c[0]||c[1]||c[2]||c[3];