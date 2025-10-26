stockCondition=(a)=>{
    if(a<=0){
        return "Out of Stock";
    }else if(a<=4){
        return "Low Stock";
    } 
    else{
        return "In Stock";
    }   
}   
mostStocked=(b)=>{
    if (b>5){
        return "Most Stocked Product";
    }
}               
const products1 = [
    { name: "Laptop", price: 60000, stock: 10 },
    { name: "Mouse", price: 800, stock: 3 },
    { name: "Keyboard", price: 1200, stock: 0 },
    { name: "Monitor", price: 15000, stock: 7 },
    { name: "Headphones", price: 2500, stock: 2 }
];

element = products1;
displayProducts=()=>{
for (const element of products1) {
    console.log(`Name: ${element.name} - ${element.price} | Quantity: ${element.stock} | Stock: ${stockCondition(element.stock)}`);
}
}
displayProducts();
console.log(`------------------------`);

let totalVlaue = products1[0].price * products1[0].stock + products1[1].price * products1[1].stock + products1[2].price * products1[2].stock + products1[3].price * products1[3].stock + products1[4].price * products1[4].stock;

console.log(`Total Inventory Value: ₹${totalVlaue}`);




let averageCost= products1[0].price + products1[1].price + products1[2].price + products1[3].price + products1[4].price;
let divdide= averageCost/5;


console.log(`Average cost of products: ₹${divdide}`);
console.log(mostStocked());


// const products2 = [
//     { name: "Apples", price: 100, stock: 200 },
//     { name: "Bananas", price: 40, stock: 3 },
//     { name: "Mangos", price: 60, stock: 0 },
//     { name: "Kivi", price: 200, stock: 1 },
//     { name: "Orange", price: 55, stock: 500 }
// ];


// try to get this using functions
// Output:
// Laptop - ₹60000 | Quantity: 10 | Status: In Stock
// Mouse - ₹800 | Quantity: 3 | Status: Low Stock
// Keyboard - ₹1200 | Quantity: 0 | Status: Out of Stock
// Monitor - ₹15000 | Quantity: 7 | Status: In Stock
// Headphones - ₹2500 | Quantity: 2 | Status: Low Stock
// -----------------------
// Total Inventory Value: ₹663100
// Most Expensive Product: Laptop priced at ₹60000
// Average cost of products: ₹5100
// Most Stocked Product: Laptop