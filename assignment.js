

// kilomiter to meter

function kilomiterToMeter(meter){
    var kilometer = meter/0.001;
    return kilometer;
}
var result = kilomiterToMeter();
console.log(result);


// budget calculator
function budgetCalculator(watch, phone,laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop *500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;   
}
var result = budgetCalculator();
console.log(result);

// hotel Cost
function hotelCost (days){
    var cost = 0;
    if(days<=10){
        cost = days * 100;
    }else if(days<=20){
        var first10Days = 10*100;
        var remaining = days - 10;
        var second20Days =remaining * 80;
        cost = first10Days + second20Days;
    }
    else{
        var firstTenDays = 10*100;
        var secondTenDays = 10*80;
        var remaining = days - 20;
        var thirdAllDays = remaining * 50;
        cost = firstTenDays + secondTenDays + thirdAllDays;
    }
    return cost;
}
var totalCost = hotelCost(50)
console.log(totalCost);

// megafriends
function megaFriend (names){
    var largeName = names[0];
    for (var i = 0; i <names.length; i++) {
        var currentName = names [i];
        if (currentName.length > largeName.length){
            largeName = currentName;
          }
    }
    return largeName;
}
var largestName = megaFriend (['asit','raj','mithun','anika','apnupama']);
    console.log(largestName);