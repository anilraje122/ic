console.log("\n-- Different types of function definitions in JS --");

// functions with optional parameters

test = (a, b, c) => {
    var d = a + b + c;
    console.log("\nThe sum is " + d);
}
test(10,20,30);
test(10,20); // wrong number of arguments, output is NaN

// Solution of above problem

test2 = (a=null, b=null, c=null) => {
    var d = a + b + c;
    console.log("\nThe sum is " + d);
}
test2(10,20,30);
test2(10,20); // wrong number of parameters
test2(10); // wrong number of parameters
test2(10,null,30); // wrong number of parameters
  
