var nav = document.querySelector('nav')

let lastpos = 0
document.addEventListener('scroll',function(){
   var curpos = window.pageYOffset;
   if(curpos>lastpos){
    nav.style.opacity = 0
   }else{
    nav.style.opacity = 1
    
   }
   lastpos= curpos
    
})