class MobileShop{
    constructor(){
        this.mobile =[]

    }
    addMobile(mobile){
        this.mobile.push(mobile)
    }
    listAllMobile(){
        this.mobiles.forEach(function(mb,index){
            console.log(
                `${index + 1}) ${mb.brand} - ${mb.model} - ${mb.color} - ${mb.price}`
              );
        })
    }
    
}
class Mobile {
    constructor(brand,model,price,color) {
        this.id =Math.floor(Math.random()*100000)
        this.model=model;
        this.color=color
        this.brand = brand;
        this.price =price
        this.sims =[]
    }
    getMobileInfo(){
        console.log(
            `${this.brand} - ${this.model} = ${this.price} - ${this.color}`
          );
    }
    insertSim(sim) {
        if (this.sims.length === 2) {
          console.log("sorry you already have 2 sims installed.");
          return;
        }
        this.sims.push(sim);
    }
}

class Sim{
    constructor(brand,balance){
        this.brand = brand
        this.balance = balance
    }
    addBalance(balance){
        if (balance < 0) {
            console.log("to add balance give amount greater than 0");
            return;
        }
        this.balance+= balance
    }
}

let MyMobileShop = new MobileShop()
let samsung = new Mobile("Samsung","S22 Ultra",120000,"black")
let grameen = new Sim("GrammenPhone",200)

samsung.insertSim(grameen)
MyMobileShop.addMobile(samsung)