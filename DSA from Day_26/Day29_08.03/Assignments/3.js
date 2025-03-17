var gender = "FeMale"
var yearOfService = 10;
var qualificaiton = "Post-Graduate"

gender = gender.toLowerCase()
qualificaiton = qualificaiton.toLowerCase()

console.log("Salary is -> "+(helper(yearOfService,qualificaiton,gender)));


function helper(yearOfService,qualificaiton,gender){
    var salary;
    if(yearOfService>=10){
        if(gender=="male"){
            return salary = qualificaiton === "post-graduate" ? 15000 : 10000;
        }
        else{
            return salary = qualificaiton === "post-graduate" ? 12000 : 9000;
        }
    }
    if(yearOfService<10){
        if(gender=="male"){
            return salary = qualificaiton === "post-graduate" ? 10000 : 7000;
        }
        else{
            return salary = qualificaiton === "post-graduate" ? 10000 : 6000;
        }
    }

}