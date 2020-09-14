// Single dimensional array
var item = ["apple", "Mango", "Banana", "Orange", "Grapes", 100, 200];

// first and last elements of array
console.log("First element is : "+ item[0]);
console.log("Last element is : "+ item[(item.length-1)]);

// print array elements in  ASC order
console.log("\nAll elements in ASC order : ");
for(let i=0; i<item.length; i++) {
    console.log(item[i]);
}

// print array elements in DESC order
console.log("\nAll elements in DESC order : ");
for(let i=(item.length-1); i>=0; i--) {
    console.log(item[i]);
}



