var mat = [[0,1],[1,0]]
var target = [[1,0],[0,1]]


var findRotation = function(mat, target) {
    function rotate(){
        for(let i=0;i<mat.length;i++){
        for(let j=i+0;j<mat[i].length;j++){
            [mat[i][j],mat[j][i]]=  [mat[j][i],mat[i][j]]
        }
    }
        for(let i=0;i<mat.length;i++){
            mat[i].reverse()
        }
    }
    console.log(mat,target);
    
    let count;
    for(let a=0;a<4;a++){
        count = 0;
        rotate();
        console.log(mat,target);
        for(let i=0;i<mat.length;i++){
            for(let j=0;j<mat[i].length;j++){
                
                if(mat[i][j]==target[i][j]){

                    count++;
                }
            }
        }
        console.log(`Count : ${count}`);
        
        if(count === Math.pow(mat.length,2)){
            return true;
        }
    }
    return false


};

var ans = findRotation(mat,target)

console.log(ans);
