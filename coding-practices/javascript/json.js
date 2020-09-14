console.log("Simple JSON parsing example");

let jsondata = '["Apple", "Mango", "Banana", "Orange", "Grape"]'; // its a json data

console.log("String length is : "+ jsondata.length);

let itemArray = JSON.parse(jsondata); // convert json to array

console.log("Array length is : "+ itemArray.length);

console.log("-----array to json-----");

let myjson = JSON.stringify(itemArray); // convert array to json

console.log("The string json length is : "+ myjson.length);