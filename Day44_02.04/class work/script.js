// changing the attribute under any tag

// var text = document.querySelector('h1')

// //text.setAttribute('id','helllllo')

// text.setAttribute('id','hellllo')



// console.log(text);


/// image swapping 

var image = document.querySelectorAll('img')

var btn = document.querySelector('button')

btn.addEventListener('click',function(){
    var image1 = image[0].getAttribute('src')
    var image2 = image[1].getAttribute('src')

    image[0].setAttribute('src',image2)
    image[1].setAttribute('src',image1)
    
})


//playing with svg ::

var svg = document.querySelector('svgg')

svg.setAttribute('fill','red')
