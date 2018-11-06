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
 var pizzatoppins = ["Pepperoni", "Sausage", "Bacon", "Onion", "Mushroom", "Tomato"];

//business logic for BYO Pizza
function Pizza(pizzaSize, pizzaSauce, pizzatopping) {
  this.pizzaSize = pizzaSize,
  this.pizzaSauce = pizzaSauce,
  this.pizzaTopping = pizzatopping
}

Pizza.prototype.size = function() {
  for (var i=0; i< this.pizzaSize.length; i++) {
    if (this.pizzaSize[i] === this.pizzaSize)
    return;
  }
 return;
}

Pizza.prototype.sauce = function() {
  for (var i=0; i< this.pizzaSauce.length; i++) {
    if (this.pizzaSauce[i] === this.pizzaSauce)
    return;
  }
 return;
}

Pizza.prototype.topping = function() {
  for (var i=0; i< this.pizzatoppings.length; i++) {
    if (this.pizzatoppings[i] === this.pizzatopping)
    return 1;
  }
 return 0;
}

Pizza.prototype.getPizzaOrderTotal = function() {
  return this.pizzaSize + this.pizzaSauce + this.pizzaTopping;
}

//User Interface
$(document).ready(function(){
  $("#show-result").submit(function(event) {
    event.preventDefault();


    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var phoneNumber = $("#phone-number").val();
    var physicalAddress = $("#physical-address").val();


    $("#first-name").text(firstNam);
    $("#last-name").text(lastName);
    $("#physical-address").text(physicalAddress);
    $("#phone-number").text(phoneNumber);


    var pizzaSize = parseInt($("input:radio[name=size]:checked").val());
    var pizzaSauce = parseInt($("input:radio[name=sauce]:checked").val());
    var pizzaTopping  = parseInt($("input:radio[name=topping]:checked").val());
    var completePizza = function(pizzaSize, pizzaSauce, pizzaTopping) {
      return pissaSize + pizzaSauce + pizzaTopping;

      $("#show-result").show();

    }
  });
});
