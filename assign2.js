class KioskCalc{
    constructor (fruit,quantity){
       this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 };
       this.fruit=fruit
       this.quantity=quantity


    }
    
  getTotalCost(){
    const price=this.fruitsPriceList[this.fruit]
    if(price===undefined){
        return `${this.fruit} is not available`
    } 
        return `${this.quantity}, ${this.fruit} ${price*this.quantity}`
    }
}
var kioskCalc = new KioskCalc("orange",4);
var kioskCalc = new KioskCalc("avocado",4);
var kioskCalc = new KioskCalc("apple",4);
console.log(kioskCalc.getTotalCost())







