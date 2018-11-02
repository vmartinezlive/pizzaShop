//business logic for contact/personal information
function PizzaOrder() {
  this.contacts = []
}

PizzaOrder.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber,
  this.address = address
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
// var pizzatopping = { toppings: "Pepperoni", "Sausage", "Bacon", "Onion", "Mushroom", "Tomato"};




function Pizza(pizzaSize, pizzaSauce, pizzatopping) {
  this.pizzaSize = pizzaSize,
  this.pizzaSauce = pizzaSauce,
  this.pizzatopping = pizzatopping
}

Pizza.prototype.size = function() {
  for (var i=0; i<this.pizzaSize.length; i++) {
    if (this.pizzaSize[i]=this.pizzaSize)
  }

}




//User Interface
$(document).ready(function)() {
  $("#show-result").submit(function(event) {
    var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
    var pizzaSauce = parseInt($("input:radio[name=sauce]:checked").val());
    var pizzaTopping  = parseInt($("input:radio[name=topping]:checked").val());
  })
}
