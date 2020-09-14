var a = 100;
var b = 200;
var c = 300;

console.log(`Values of a, b and c are ${a} ${b} ${c}`);

console.log("\n-- if-else example --");

if(a>b) {
    console.log("\nHigher value is a : "+ a);
} else {
    console.log("\nHigher value is b : "+ b);
}


console.log("\n-- if-else if example --");

if((a>b) && (a>c)) {
    console.log("\nHigher value is a : "+ a);
} else if((b>a) && (b>c)) {
    console.log("\nHigher value is b : "+ b);
} else {
    console.log("\nHigher value is c : "+ c);
}


console.log("\n-- nested if --");

if(c>200) {
    if(c%2 === 0) {
        console.log(`\nValue of c=${c} is greater than 200 and is also an even number!`);
    } else {
        console.log(`\nValue of c=${c} is is greater than 200 and is also an odd number!`);
    }
} else {
    console.log(`\nValue of c=${c} is less than 200`);
}
