// do not remove anything that is already written

function main() {
  // declare 3 variables using let, var, and const with either Number or String type
  let happy = "good";
  var sad = "mid";
  const flush = 10;

  // print the 3 variables declared by replacing the variables with your own
  console.log(happy);
  console.log(sad);
  console.log(flush);
  function inFunction() {
    // declare 3 more variables using let, var, and const with either Number or String type
    // -- START HERE --
    let water = 0;
    var gatorade = "healthy";
    const cola = "unhealthy";
    // -- END HERE --
    console.log(water);
    console.log(gatorade);
    console.log(cola);
    return null;
  }
  inFunction();

  // print the 3 variables declared inside inFunction by replacing the variables with your own

  // declare an appropriate variable with an empty array
  // -- START HERE --
  let bottle = [];
  // -- END HERE --

  // replace the variable with your variable
  if (bottle) console.log("true");
  else console.log("false");

  // declare an appropriate variable with an array that has 3 different Numbers
  // -- START HERE --
  const cop = [12, 13, 14];

  // -- END HERE --

  console.log("Elements in new array");
  cop.forEach((element, idx) => console.log(idx + ": ", element));

  // modify the array elements with different Numbers
  // -- START HERE --
  cop[0] = "24";
  cop[1] = 69;
  cop[2] = "ball";
  // -- END HERE --

  console.log("Modified elements in same array");
  cop.forEach((element, idx) => console.log(idx + ": ", element));

  // declare an appropriate variable with an empty object
  // -- START HERE --
  let thunwa = {};

  // -- END HERE --

  // print the object variable declared by replacing the variables with your own
  console.log("Your object: ", thunwa);
  if (thunwa) console.log("true");
  else console.log("false");

  // declare an appropriate variable with an object that has 3 key value pairs
  // -- START HERE --
  let thuna = {
    bench: 135,
    squat: 223,
    dl: 404,
  };
  // -- END HERE --

  console.log("Elements in new object");
  Object.keys(thuna).forEach((key) => console.log(key + ": ", thuna[key]));

  // modify the array elements with different Numbers
  // -- START HERE --
  thuna["bench"] = 125;
  thuna.squat = 205;
  thuna.dl = "NA";
  // -- END HERE --

  console.log("Modified elements in same object");
  Object.keys(thuna).forEach((key) => console.log(key + ": ", thuna[key]));

  // sandbox area | play around with variables and different types
  // -- START HERE --
  let a1 = ["poop", "school", "monaco", "poland", "korea", "usa", "xbox"];
  console.log(a1);
  console.log(a1[1]);
  var pizza = {
    ingredients: ["tomato sauce", "dough", "cheese", "aesang's special sauce"],
    calories: 1200,
    price: "$24.99",
  };
  console.log(pizza);
  console.log(pizza[0]);
  console.log(pizza.ingredients[1]);
  pizza.calories += 100000000;
  console.log(pizza.calories);
  console.log(pizza.price);
  // -- END HERE --
}

main(); // this is to run the main function

// to run this file cd into variables directory and run -> node variables.js
