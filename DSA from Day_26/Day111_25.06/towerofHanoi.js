let n = 3;
function towerofHanoi(n,s,h,d){
    if(n==1){
        console.log("Move 1 plate from "+s+" to "+d);
        return
    }
    towerofHanoi(n-1,s,d,h)
    console.log(`Move ${n} plate to ${s} to ${d}`);
    towerofHanoi(n-1,d,s,d)
    
}
towerofHanoi(n,'S','H','D')