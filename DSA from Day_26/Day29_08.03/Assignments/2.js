// var rating = Number(prompt("Enter rating: "))
// var movie = Number(prompt("Enter movie: "))
var rating = 4.55;
var movie = "RRR"

rating = rating.toFixed(1)

if(rating>0.0 && rating<=2.0){
    console.log(movie+" is a Flop");
}
else if(rating>2.1 && rating<=3.5){
    console.log(movie+" is a Semi Hit");
}
else if(rating>3.5 && rating<=4.5){
    console.log(movie+" is a Hit");
}
else if(rating>4.5 && rating<=5.0){
    console.log(movie+" is a Super Hit");
}