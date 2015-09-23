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
        basePrice = 0 + basePrice;
        break;
    case "large":
        basePrice = 5 + basePrice;
        break;
  }
  basePrice = this.quantity*(basePrice);
  return basePrice;

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
