var btn = document.querySelector('button')
var text = document.querySelector('h5')

var flag =true
btn.addEventListener('click',function(){
    if(flag){
            text.innerHTML = 'Request Sending...'
            text.style.color = 'gold'
            btn.style.opacity = 0

        setTimeout(function(){
            text.innerHTML = 'Friend'
            text.style.color = 'green'
            btn.innerText = 'Unfriend'
            btn.style.opacity = 1
            btn.style.backgroundColor = 'red'
            flag= false
        },2000)
        
    }
    else{
        text.innerHTML = 'Stanger'
        text.style.color = 'red'
        btn.innerText = 'Add Friend'
        flag= true
    }
})