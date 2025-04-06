/**
 * @param {number} num
 * @return {string}
 */
var num = 1994;
var intToRoman = function(num) {
    let s = ''
    if(num>=1000){
        let n = Math.floor(num/1000)
        for(let i=0;i<n;i++){
            s+= 'M'
        }
        num %=1000
    }
    if(num>=500 && num<1000){
        let check = 1000 - num;
        if(check>100){
            let n = Math.floor(num/500)
            for(let i=0;i<n;i++){
            s+= 'D'
             num %=500
            }
        }
        else{
            s+= 'CM'
            num %=900
        }   
       
    }
    if(num>=100 && num<500){
        let check = 500 - num;
        if(check>100){
            let n = Math.floor(num/100)
            for(let i=0;i<n;i++){
                s+= 'C'
            }
            num %=100
        }
        else{
            s+= 'CD'
            num %=400
        }
        
    }
    if(num>=50 && num<100){
        let check = 100 - num;
        if(check>10){
            let n = Math.floor(num/50)
            for(let i=0;i<n;i++){
            s+= 'L'
            }
            num %=50
        }
        else{
            s+= 'XC'
            num %=90
        }
        
    }
    if(num>=10 && num<50){
        let check = 50 - num;
        if(check>10){
            let n = Math.floor(num/10)
            for(let i=0;i<n;i++){
                s+= 'X'
            }
            num %=10
        }
        else{
            s+= 'XL'
            num %=40
        }
        
    }
    if(num>=5 && num<10){
        let check = 10 - num;
        if(check>1){
            let n = Math.floor(num/5)
            for(let i=0;i<n;i++){
                s+= 'V'
            }
            num %=5
        }
        else{
            s+= 'IX'
            num %=9
        }
        
    }
    console.log(num)
    if(num>=1 && num<5){
        let check = 5 - num;
        if(check>1){
            let n = Math.floor(num/1)
            for(let i=0;i<n;i++){
                s+= 'I'
            }
            num %=1
        }
        else{
            s+= 'IV'
            num %=4
        }
    }
    return s;
};

console.log(intToRoman(num))