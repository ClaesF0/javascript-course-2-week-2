/*CHAINING*/

const products = [
  
    // Here we create an object and each
    // object has a name and a price
    { name: 'dress', price: 600 },
    { name: 'cream', price: 60 },
    { name: 'book', price: 200 },
    { name: 'bottle', price: 50 },
    { name: 'bedsheet', price: 350 }
];
/*
// 1. Filter those elements whose price is greater than 100 using the filter method
const productsOverHundred = products.filter((product) => {
    if (product.price > 100){
        return true;
    }
});

console.log("products Over Hundred:", productsOverHundred);

// 2.Map on those elements to a new array with the new sale price (59%) off
const discountedProducts = productsOverHundred.map((product)=>{
    return `the new price of a ${product.name} is now ${product.price / 2}`
    // (productsOverHundred.price*0.5)
});

console.log(discountedProducts);
*/

//combining them
 const productsOverHundred = products
                             .filter((product) => product.price > 100)
                             .map((product) => {
                                 return `the new price of a ${product.name} is now ${product.price / 2}` 
                             });
                             console.log("discounted products", productsOverHundred)
                            
const productsDiscountedDestructured = products
.filter(({price}) => price > 100)
.map(({name, price}) => {
    return `the new price of a ${name} is now ${price / 2}` 
});
console.log("discounted products", productsDiscountedDestructured)                 
                            
// EXAMPLE 2
// In this example, we have a list of products that
// we want to apply a discount to it for a sale, but only products where:
// 1. the price is 5 or higher (>= 5)
// 2. the products are in stock (inStock === true)
// use the map method to calculate a new property called discountedPrice
// to calculate the discount = price - (discount percentage / 100) * price
// discount percentage will be 20
// {name: 'Milk', price: 5, inStock: true, discountedPrice: 4}
const inventoryProducts = [
    { name: 'Milk', price: 5.0, inStock: true },
    { name: 'Cheese', price: 10.0, inStock: true },
    { name: 'Bread', price: 8.0, inStock: false },
    { name: 'Beans', price: 3.0, inStock: true },
    { name: 'Eggs', price: 12.0, inStock: true },
    { name: 'Rice', price: 4.0, inStock: false },
    { name: 'Meat', price: 25, inStock: true },
    { name: 'Coffee', price: 12.0, inStock: true },
    { name: 'Tea', price: 8.0, inStock: false },
    { name: 'Bottled Water', price: 4.0, inStock: false },
];

const inventoryProductsFiltered = inventoryProducts.filter((product)=>{
    if(product.price >= 5 && (product.inStock===true)){
        return true;
    }
});

const discountedInventoryProducts = inventoryProductsFiltered.map((product)=>{
    //price * 0.8
    product.discountedPrice = product.price * 0.8;
    return product;
});

console.log("inventoryProductsFiltered", inventoryProductsFiltered);
console.log("discountedInventoryProducts", inventoryProductsFiltered);

//Destructured
const discountedInventoryProductsDestructured = inventoryProducts
    .filter(({price, inStock})=> price >= 5 && (inStock===true))
    .map((product)=>{
        //price * 0.8
        product.discountedPrice = product.price * 0.8;
        return product;
    })

console.log("discountedInventoryProductsDestructured",discountedInventoryProductsDestructured)

// Example 4
/* 

Practical example 2

In this example, we have a list of students. We need to calculate the class average so that we can analyse data. 
Each student has their own results in an array (results) that must first be calculated as average before we can get the class average.

In addition to the above, the students that are getting analysed must fit these criteria:

    They must be 30 years of age or older (>= 30)
    They must be an online student (isOnline === true)

We can achieve the above with a filter and reduce chain while also having a nested reduce:

    filter: We first filter out the students we need (age >= 30 and isOnline === true), which returns an array of only the students we need.

    reduce: We then reduce all of the student’s averages so that we can have one class average.

    a. reduce: We need to get the average of a student before we can calculate the class average. 
    We, therefore, have a nested reduce inside the main reduce that loops through all of the student’s results to get an average.

Additional info regarding results average

Typically to get an average, you perform the following calculation:

student average = sum of all results / total number of results

In this example, we perform the calculation slightly differently:

student average = (mark / total number of marks) + (mark / total number of marks) + ...

We divide each result by the total number of results and then add this to a total, giving us the same end result. 
We do this so we don’t have to wait until all results have been totalled before calculating the average. 
We can instead calculate the average when each element loops, saving us a step at the end.

*/
                            
const students = [
    { name: 'Victoria', age: 19, isOnline: true, results: [80, 61, 66, 50, 91] },
    { name: 'Theo', age: 32, isOnline: false, results: [57, 99, 96, 72, 96] },
    { name: 'Markus', age: 54, isOnline: true, results: [50, 92, 70, 66, 90] },
    { name: 'Aksel', age: 21, isOnline: true, results: [77, 86, 70, 71, 75] },
    { name: 'Felix', age: 29, isOnline: false, results: [99, 76, 59, 74, 68] },
    { name: 'Benjamin', age: 48, isOnline: true, results: [65, 85, 74, 83, 54] },
    { name: 'Ulrik', age: 39, isOnline: true, results: [92, 72, 55, 69, 58] },
    { name: 'Alma', age: 28, isOnline: false, results: [92, 91, 66, 77, 71] },
    { name: 'July', age: 37, isOnline: true, results: [78, 70, 59, 76, 95] },
    { name: 'Leo', age: 42, isOnline: true, results: [55, 64, 88, 88, 95] },
  ];
  
  const filteredStudents = students 
    //get only students over 30 and online (>=30 && online)
    .filter((student)=>{
        if(student.age >=30 && student.isOnline===true){
            return true;
        }
    });

    console.log("filteredStudents", filteredStudents);


    const totalClassAverage = students
    .filter((student) => student.age >= 30 && (student.isOnline === true))
    .reduce((classAverage, student, index, studentArray) => {
    // reduce all the students results to a single average
    const studentsTotalMarks = student.results.reduce((studentAverage, result, index, resultsArray) => {
        studentAverage += result / resultsArray.length;
        return studentAverage;
    }, 0)
    return classAverage += studentsTotalMarks / studentArray.length
}, 0);
console.log(totalClassAverage);


/* 
const classAverage = filteredStudents.reduce((classAverage, student, index, studentArray)=>{
        // reduce all the students to a single average
        const studentsTotalMarks = student.results.reduce((studentAverage, result, index, resultsArray)=>{
            studentAverage += result / resultsArray.length;
            return studentAverage;
        },0)
        return studentsTotalMarks / filteredStudents.length
    },0);
    console.log(student.results.reduce)
console.log(classAverage)
*/
    

    /*
    
    const studentAverageGrade = filteredStudents.results.reduce(
        (studentAverage, result, index, resultsArray)=> {
            return studentAverage += result/resultsArray.length;
        },0
    );
console.log(studentAverageGrade)
    
    */
    