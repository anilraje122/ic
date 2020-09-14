let item:any[] = ["orange", "apple", "blackberry", "mango"];

for(let i:number=0 ; i<item.length; i++) {
    console.log(item[i]);
}

console.log("--------------");

for(let i:number= (item.length-1) ; i>=0; i--) {
    console.log(item[i]);
}