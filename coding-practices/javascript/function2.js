 console.log("\n-- Different types of function definitions in JS --");

// functions with parameters

/**** 
+ uses for two purposes. If all the operands are numeric, it returns the sum
If all operands are strings, it concatinate the inputs
****/

// function definition - 1
function one(input){
    console.log("\nYour input is " + input);
}
one(100);
one("Bangalore");

// function definition - 2
two = function(a, b) {
    var c = a + b;
    console.log("\nSum or concatinate output is " + c);
}
two(10,20);
two(100, "Bangalore");
two("Hello", "World");

// function definition - 3 // ES6 syntax
three = (a, b) => {
    console.log("\nSum or concatinate output is " + (a+b));
}
three(1,2);
three(300, 'Pune');
three('Hello', 'Js');