// creating new elemement !

// var myDetails = document.createElement('h2')

// myDetails.innerHTML= " I am 20 years old, and a CSE student !"

// document.querySelector('.container').appendChild(myDetails)

//// image append

// var image = document.createElement('img')
// image.setAttribute("src","https://pnghq.com/wp-content/uploads/doraemon-png-images-hd-19198-887x1024.png")


var btn = document.querySelector('button')

var container = document.querySelector('.container')
btn.addEventListener('click', function () {
    // have to create the element every time !!!
    var image = document.createElement('img')
    image.setAttribute("src", "https://pnghq.com/wp-content/uploads/doraemon-png-images-hd-19198-887x1024.png")
    image.setAttribute('class','image')

    var x = Math.floor(Math.random()*90)
    var y = Math.floor(Math.random()*80)
    var deg = Math.floor(Math.random()*360)

    image.style.left = x+'%'
    image.style.top = y+'%'
    image.style.rotate = deg+'deg'
    console.log(image);
    container.appendChild(image)

})