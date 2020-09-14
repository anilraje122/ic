console.log("\n-- Different types of function definitions in JS --");

// functions without parameters

// function definition - 1
function one() {
    console.log("\nThis is from function one");
}
one(); // function call

// function definition - 2
two = function() {
    console.log("\nThis is from function two");
}
two();

// function definition - 3 // ES6 syntax
three = () => {
    console.log("\nThis is from function three");
}
three();
