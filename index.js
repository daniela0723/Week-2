//true && false 
console.log(true && false); //false

//true || false 
console.log(true || false); //true

//false && false 
console.log(false && false); //false

//true && (false || true) 
console.log(true && (false || true)); //true

//false || (true && false) 
console.log (false || (true && false)); //false

//false || 1 < 5 
console.log(false || 1 < 5); //true

//5 >= 4 && 1 > 3 
console.log(5 >= 4 && 1 > 3); //false

//10 < 4 || 1 > 4  
console.log(10 < 4 || 1 > 4); //false

//12 >= 2 && 1 < 24 
console.log (12 >= 2 && 1 < 24); //true

//'Hello'.charAt(0) == 'h' 
console.log('Hello'.charAt(0) == 'h'); //false

var isHotOutside = true;
var isWeekday = true;
var hasMoneyInPocket = true;

var costOfMilk = 1.99;
var moneyInWallet = 5.00;
var thirstLevel = 6;

let shouldBuyIceCream = isHotOutside && hasMoneyInPocket;
    console.log(shouldBuyIceCream);
let willGoSwimming = isHotOutside && !isWeekday;
    console.log(willGoSwimming);
let isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
    console.log(isAGoodDay);
let willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= 2 * costOfMilk;
    console.log(willBuyMilk);




