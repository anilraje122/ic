console.log("\n-- for-loop example -- ");

for (var i=1; i<=10; i++) {
    console.log("The counter is : "+ i);
}


console.log("\n-- for-loop example in descending order-- ");

for (var i=10; i>0; i--) {
    console.log("The counter is : "+ i);
}


console.log("\n-- for-loop example for odd numbers in descending order-- ");

for (var i=10; i>0; i--) {
    if(i%2 !== 0) {
        console.log("The counter is : "+ i);
    }
}

console.log("\n-- for-loop example for even numbers in descending order-- ");

for (var i=10; i>0; i--) {
    if(i%2 == 0) {
        console.log("The counter is : "+ i);
    }
}
