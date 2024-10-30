function pizza_oven(bread, protein, cheese, toppings) {
  var pizza = {};
  pizza.bread = bread;
  pizza.protein = protein;
  pizza.cheese = cheese;
  pizza.toppings = toppings;
  return pizza;
}

var s1 = pizza_oven("deep dish", "traditional", ["mozzarella"], ["peppreoni", "sausage"]);
console.log(s1);

var s2 = pizza_oven("hand tossed", "marinara", ["mozzarella"], ["peppreoni", "sausage"]);
console.log(s2);