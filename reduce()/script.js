// reduce

const values = [2,3,4,6,7]
//we want to reduce arry method to calculate the sum
// of the items in the array values

const sum = values.reduce((total, item)=>{
    total += item;
    return total
}, 0);
console.log("sum: ", sum);
/*
How did this work? 
0 = 0 + 2
now the total is 2
    total = 2 + 3 
    now the total is 5
        total = 5 + 4
        now the total is 9
            total = 9 + 6
            now the total is 15
                total = 15 + 7
                    now the total is 22
when the reducing is done it will return the total

The reduce method does not change the original array
*/

//THIS HAPPENS IF WE START AT 10 INSTEAD OF 0
const sumPlusTen = values.reduce((total, item)=>{
    total += item;
    return total
}, 10);
console.log("sumPlusTen: ", sumPlusTen);


//CALCULATE NUMBER OF CARS IN GARAGES
//please bear in mind that I have 50 cars away in maintenance right now

const garages = [
    {make: "BMW", cars: 10},
    {make: "Tesla", cars: 20},
    {make: "Opel", cars: 40},
    {make: "Volkswagen", cars: 1}
];

const totalNumberOfCars = garages.reduce((total, {cars})=>{
    total += cars;
    return total
}, 50);
console.log("numbers of cars in garages: ", totalNumberOfCars)

//GET A TOTAL NUMBER OF PRODUCTS IN STOCK
const products = [
    {
        title: "pudding",
        isInStock: true,
        quantity: 10,
        price: 20,
        currency: "NOK"
    }, {
        title: "cheese",
        isInStock: false,
        quantity: 0,
        price: 200,
        currency: "NOK"
    }, {
        title: "milk",
        isInStock: true,
        quantity: 20,
        price: 100,
        currency: "NOK"
    }, {
        title: "eggs",
        isInStock: true,
        quantity: 1000,
        price: 10,
        currency: "NOK"
    }
]
//get the totalt cost of instock products
//to calculate the total cost you need to multiply
//price*quantity
//only stuff that is in stock
//please use the reduce array function

// //product.isInStock === true
// const totalCost = products.reduce((total, product)=>{
//     if(product.isInStock === true){
//         total += product.price * product.quantity;
//     }
//     return total
// }, 0);
// 
// console.log(totalCost,"NOK");

// with " condition ? true : false "

const totalCost = products.reduce((total, product)=>{
//   if(product.isInStock === true){
//       total += product.price * product.quantity;
//   }
    return product.isInStock === true ? total += product.price * product.quantity : total
}, 0);

console.log(totalCost,"NOK");