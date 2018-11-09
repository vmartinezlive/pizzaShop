//business logic for contact/personal information
function PizzaOrder() {
  this.contacts = [];
}

PizzaOrder.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

function Contact(firstName, lastName, phoneNumber, address) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.address = address,
  this.phoneNumber = phoneNumber
}

Contact.prototype.personalInfo = function() {
  return this.firstName + " " + this.lastName + "." + " You're address is " + this.address + " and your contact number is " + this.phoneNumber;
}

//business logic for BYO Pizza
// var pizzaSize = { size: "Small", "Medium", "Large"} ;
// var pizzaSauce = { sauce: "Marina", "Alfredo", "Pesto"};
// var pepperoni = { topping: "pepperoni"};
// var sausage = { topping: "sausage"};
// var bacon = { topping: "bacon"};
// var onion = { topping: "onion"};
// var mushroom = { topping: "mushroom"};
// var tomato = { topping: "tomato"};
var pizzatoppings = ["Pepperoni", "Sausage", "Bacon", "Onion", "Mushroom", "Tomato"];




function Pizza(pizzaSize, pizzaSauce, pizzaTopping) {
  this.pizzaSize = pizzaSize,
  this.pizzaSauce = pizzaSauce,
  this.pizzaTopping = pizzaTopping

}

Pizza.prototype.size = function() {
  for (var i=0; i< this.pizzaSize.length; i++) {
    if (pizzasize[i] === this.pizzaSize) {
    }
  }
    return this.pizzaSize;
}

Pizza.prototype.sauce = function(){
  for (var i=0; i< this.pizzaSauce.length; i++) {
    if (pizzasauce[i] === this.pizzaSauce) {
      return this.pizzaSauce + 1 ;
    }
  }
}

Pizza.prototype.topping = function() {
  for (var i=0; i< this.pizzaToppings.length; i++) {
    if (pizzaToppings[i] === this.pizzaTopping) {
    }
  }
    return this.pizzaTopping;
}

Pizza.prototype.getPizzaOrderTotal = function() {
    return this.pizzaSize + this.pizzaSauce + this.pizzaTopping;
}
//User Interface
$(document).ready(function(){
  $("#pizza-order").submit(function(event) {
    debugger;
    event.preventDefault();
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var phoneNumber = $("#phone-number").val();
    var physicalAddress = $("#physical-address").val();

    $(".first-name").text(firstName);
    $(".last-name").text(lastName);
    $(".physical-address").text(physicalAddress);
    $(".phone-number").text(phoneNumber);


    var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
    var pizzaSauce = parseInt($("input:radio[name=sauce]:checked").val());
    var pizzaTopping  = parseInt($("input:radio[name=topping]:checked").val());
    var pizza = new Pizza(pizzaSize, pizzaSauce, pizzaTopping);
    var orderTotal = pizza.getPizzaOrderTotal();
console.log(pizza);

    $("#show-result").show();
    $("#pizzaOrder").text(orderTotal);
  })
});
