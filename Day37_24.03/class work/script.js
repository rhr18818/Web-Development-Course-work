var btn = document.querySelector('button')
var text = document.querySelector('h5')

var flag =true
btn.addEventListener('click',function(){
    if(flag){
        text.innerHTML = 'Friend'
        text.style.color = 'green'
        btn.innerText = 'Unfriend'
        flag= false
    }
    else{
        text.innerHTML = 'Stanger'
        text.style.color = 'red'
        btn.innerText = 'Add Friend'
        flag= true
    }
})