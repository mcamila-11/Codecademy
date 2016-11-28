var orderCount = 0;

function takeOrder(topping, crustType){
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
  orderCount = orderCount + 1;
}

takeOrder('bacon', 'thin crust');
takeOrder('pineapple', 'thick crust');
takeOrder('pepperoni', 'cheesy crust');
// Order: cheesy crust pizza topped with pepperoni

console.log(orderCount); // 3

function getSubTotal(itemCount){
  return itemCount * 7.5;  
}

console.log(getSubTotal(orderCount)); //  22.5

function getTax(){
  return getSubTotal(orderCount) * 0.06;
}


console.log(getTax());  //  1.35

function getTotal(){
  var result = getSubTotal(orderCount) + getTax();
  return result;
}

console.log(getTotal());  //  23.85
