// creating new elemement !

// var myDetails = document.createElement('h2')

// myDetails.innerHTML= " I am 20 years old, and a CSE student !"

// document.querySelector('.container').appendChild(myDetails)

//// image append

// var image = document.createElement('img')
// image.setAttribute("src","https://pnghq.com/wp-content/uploads/doraemon-png-images-hd-19198-887x1024.png")

var images = [
    "https://i.pinimg.com/originals/30/9f/70/309f7024aa14009d04e18f1a315bbeb7.png"
    ,
    "https://pnghq.com/wp-content/uploads/doraemon-png-images-hd-19198-887x1024.png"
    ,
    "https://purepng.com/public/uploads/large/purepng.com-tom-tom-and-jerrytom-and-jerrytomjerryanimated-seriesin-1940characters-1701528659640zt1nu.png"
    ,
    "https://pnghq.com/wp-content/uploads/tom-and-jerry-png-transparent-image-download-hq-png-image-768x780.png"
    ,
    "https://pnghq.com/wp-content/uploads/2023/02/doraemon-characters-png-7822-768x722.png"
]


var btn = document.querySelector('button')

var container = document.querySelector('.container')
btn.addEventListener('click', function () {
    // have to create the element every time !!!
    var randomImage = Math.floor(Math.random()*images.length)
    var image = document.createElement('img')
    image.setAttribute("src", images[randomImage])
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