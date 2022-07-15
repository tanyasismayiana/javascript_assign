let fruits={
    mango:30,
    banana:40,
    orange:50,
    kiwi:20

}
function calculateFruitCost(fruit,quantity){
    const price=fruits[fruit]
    if(price===undefined){
        return `${fruit} is not available`
    } 
    return`${quantity}, ${fruit} for KSH ${price*quantity}`
}
console.log(calculateFruitCost("mango",4))  
console.log(calculateFruitCost("Apple",5))
console.log(calculateFruitCost("kiwi",5))