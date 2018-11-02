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
var pizzaSize = { size: "Small", "Medium", "Large"};
var pizzaSauce = { sauce: "Marina", "Alfredo", "Pesto"};
var pepperoni = { topping: "pepperoni" price: 1.00};
var sausage = { topping: "sausage" price: 1.00};
var bacon = { topping: "bacon" price: 1.00};
var onion = { topping: "onion" price: .50};
var mushroom = { topping: "mushroom" price: .50};
var tomato = { topping: "tomato" price: .50};
var pizzatopping = { toppings: "Pepperoni", "Sausage", "Bacon", "Onion", "Mushroom", "Tomato"};


function Pizza(pizzaSize, pizzaSauce, pizzatopping) {
  this.pizzaSize = pizzaSize,
  this.pizzaSauce = pizzaSauce,
  this.pizzatopping = pizzatopping
}

Pizza.prototype.topping = function(pizzaSize) {
  for (var i=0; i<this.pizzaSize.length; i++) {
    if (this.pizzaSize[i].)
  }

}
