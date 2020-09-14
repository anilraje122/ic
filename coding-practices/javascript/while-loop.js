console.log("\n-- while loop example for ASC order");

var i = 1;
while(i <= 10) {
    console.log("The counter is "+ i);
    i++;
}

console.log("\n-- while loop example for DSC order");
var i = 10;
while(i >= 1) {
    console.log("The counter is "+ i);
    i--;
}

console.log("\n-- for and while loop --");
var i = 1;
while(i<=20) {
    var data = '';
    for(var j=1; j<=i; j++) {
        data += '*';
    }
    console.log(data);
    i++;
}