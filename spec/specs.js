describe('Pizza', function(){
  it("creates a pizza", function(){
    var testPizza = new Pizza();
    expect(testPizza).to.eql(new Pizza());
});//not needed, but doesn't hurt.
  it("it returns the quantity of pizza ordered", function(){
    var testPizza = new Pizza(3, "pepperoni", "large");
    expect(testPizza.quantity).to.equal(3);
  });

  it("it checks for the toppings that was inputed", function(){
    var testPizza = new Pizza(3, "pepperoni", "large");
    expect(testPizza.toppings).to.eql(["pepperoni"]);
  });

  it("it checks for the pizza size that was inputed", function(){
    var testPizza = new Pizza(3, "pepperoni", "large");
    expect(testPizza.size).to.equal("large");
  });

  it("finds the total cost of 3 large pizzas ordered with one topping", function(){
    var testPizza = new Pizza(3, "pepperoni", "large");
    expect(testPizza.totalPrice()).to.equal(66);
  });

  it("finds the total cost of 3 small pizzas ordered with one topping", function(){
    var testPizza = new Pizza(3, "pepperoni", "small");
    expect(testPizza.totalPrice()).to.equal(51);
  });

});
