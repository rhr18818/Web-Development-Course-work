var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

// var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]] -> for checking edge case !!

var arr = Array(matrix.length*matrix[0].length)

let minc= 0, minr= 0;
let maxc = matrix[0].length-1
let maxr = matrix.length-1
// console.log(minc,minr,maxc,maxr);

for(let index=0;index<arr.length;){
    for(let i=0+minc;i<=maxc && index<arr.length;i++){
        arr[index++] = matrix[minr][i]
        //  console.log(arr+' loop1 '+minc); -> just for debugging purposes !!
    }
    minr++;
    for(let i=0+minr;i<=maxr && index<arr.length;i++){
        arr[index++] = matrix[i][maxc]
        //  console.log(arr+' loop2 '+ minr); -> just for debugging purposes !!
    }
    
    maxc--;
    for(let i=maxc;i>=minc && index<arr.length;i--){
        arr[index++] = matrix[maxr][i]
        // console.log(arr+' loop3 ' + maxc); -> just for debugging purposes !!
    }
    maxr--;
    for(let i=maxr;i>=minr && index<arr.length;i--){
        arr[index++] = matrix[i][minc]
        //  console.log(arr+' loop4 '+ maxr); -> just for debugging purposes !!
    }
    minc++

}

// console.log(`minr: ${minr} maxr: ${maxr} minc: ${minc} maxc: ${maxc}`); -> just for debugging purposes !!

console.log(arr);
