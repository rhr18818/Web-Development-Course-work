/**
 * @param {number} n
 * @param {number} k
 * @return {number}


 */

function solver(k,arr,i){
    if(arr.length === 1) return arr[0]
    i= (i+k)%arr.length
    arr.splice(i,1)
    return solver(k,arr,i)
}
var findTheWinner = function(n, k) {
    let arr = new Array(n)
    for(let i=0;i<n;i++){
        arr[i] = i+1;
    }
    k= k-1;
    return solver(k,arr,0);
};


//// watch love Babber Video for Better understand 

function solver(n,k){
    if(n==1) return 0
    return (solver(n-1,k)+k)%n
}
var findTheWinner = function(n, k) {
    return solver(n,k)+1
};