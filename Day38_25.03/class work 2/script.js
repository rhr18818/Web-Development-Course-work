var text = document.querySelector('h1')
var btn = document.querySelector('button')
var box = document.querySelector('.box')
var arr =["CSK", "MI", "RCB", "DC", "GT", "LSG", "KKR", "PK", "RR", "SRH"]

var arr2 =[
    {
        shortName: "CSK",
        name: "Chennai Super Kings",
        primaryColor: "Yellow",
        secondaryColor: "Blue"
      },
      {
        shortName: "MI",
        name: "Mumbai Indians",
        primaryColor: "Blue",
        secondaryColor: "Gold"
      },
      {
        shortName: "RCB",
        name: "Royal Challengers Bangalore",
        primaryColor: "Red",
        secondaryColor: "Gold" // or "Black", sometimes black is used as secondary
      },
      {
        shortName: "KKR",
        name: "Kolkata Knight Riders",
        primaryColor: "Purple",
        secondaryColor: "Gold"
      },
      {
        shortName: "DC",
        name: "Delhi Capitals",
        primaryColor: "Blue",
        secondaryColor: "Red"
      },
      {
        shortName: "PBKS",
        name: "Punjab Kings",
        primaryColor: "Red",
        secondaryColor: "Gold"
      },
      {
        shortName: "RR",
        name: "Rajasthan Royals",
        primaryColor: "Pink",
        secondaryColor: "Blue"
      },
      {
        shortName: "SRH",
        name: "Sunrisers Hyderabad",
        primaryColor: "Orange",
        secondaryColor: "Black"
      },
      {
        shortName: "GT",
        name: "Gujarat Titans",
        primaryColor: "Navy Blue",
        secondaryColor: "lightblue"
      },
      {
        shortName: "LSG",
        name: "Lucknow Super Giants",
        primaryColor: "Sky Blue",
        secondaryColor: "DarkBlue" // or "Red", sometimes red accents are used
      }
]


btn.addEventListener('click',function(){
    var num = Math.floor(Math.random()*arr.length)
    text.innerHTML = arr2[num].shortName;
    text.style.color = arr2[num].secondaryColor;
    box.style.backgroundColor = arr2[num].primaryColor
})