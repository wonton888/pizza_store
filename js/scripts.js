function Pizza(quantity, topping, size){
  var toppings = [];
  toppings.push(topping);
  this.quantity = quantity;
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.addTopping = function(new_topping){
  this.toppings.push(new_topping);
};

Pizza.prototype.totalPrice = function(){
  var basePrice = 15;
  basePrice = (this.toppings.length * 2) + basePrice;
  switch(this.size){
    case "small":
        // basePrice = 0 + basePrice;
        // No need to modify basePrice for a small
        break;
    case "large":
        basePrice = 5 + basePrice;
        break;
  }
  // basePrice = this.quantity*(basePrice);
  // nothing wrong with previous line, but for clarity it could be nice to give it a new name besides basePrice
  // alternately, could just use the name price throughout, because then it doesn't look like you are accidentally returning the same starting price.
  var finalPrice = this.quantity*(basePrice);
  return finalPrice;

};

$(document).ready(function(){
  var newPizza;
  $("form#new-order").submit(function(event){
    event.preventDefault();

    var quantityEntered = parseInt($("select#quantity").val());
    var toppingEntered = $("select#topping").val();
    var sizeEntered = $("select#size").val();

    newPizza = new Pizza(quantityEntered, toppingEntered, sizeEntered);

    var result = newPizza.totalPrice();

    $(".price").text(result);
  });
});
