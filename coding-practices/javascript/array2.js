var item = [
    {"name":"Apple", "price":200, "qty": 20},
    {"name":"Mango", "price":100, "qty": 10},
    {"name":"Orange", "price":400, "qty": 40},
    {"name":"Banana", "price":250, "qty": 70},
    {"name":"Lemon", "price":300, "qty": 60}
];

console.log("Total Items : "+ item.length);

for(let i=0; i<item.length; i++) {
    console.log("\n-----------------\n");
    console.log("The Item Name : "+ item[i].name);
    console.log("The Item Price : "+ item[i].price);
    console.log("The Item Qty : "+ item[i].qty);
}