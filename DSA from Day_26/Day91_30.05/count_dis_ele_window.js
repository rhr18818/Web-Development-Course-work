let arr = [1, 2, 1, 3, 4, 2, 3], k = 4
let map = new Map()

for(let i=0;i<k-1;i++){
    map.set(arr[i],map.get((arr[i]||0)+1))
}
let i=0,j=k-1
let ans = []
while(j<arr.length){
    map.set(arr[j],map.get((arr[j]||0)+1))
    ans.push(map.size)
    let freq = map.get(arr[i])
    if(freq==1) map.delete(arr[i])
    else map.set(arr[i],map.get(arr[i])-1)

    i++
    j++
}

console.log(ans);
