//EXAMPLE 1
//map()

const names = [
    {firstName: 'Ola', lastName: 'Nordmann'},
    {firstName: 'John', lastName: 'doe'},
    {firstName: 'Mario', lastName: 'rosi'},
    {firstName: 'jan', lastName: 'jansen'},
];

console.log("before map", names);

//return:
//["Ola Nordmann", "john Doe"]

// const newCombinedNames = names.map((person)=>{
//     //modify and return element
//     return `${person.firstName} ${person.lastName}`
// })
// 
// console.log("after map", newCombinedNames);


//with destructuring
const newDestructuredNames = names.map(({firstName, lastName})=>{
    //modify and return element
    console.log("hello"); //logs 4 times because of array size
    return `${firstName} ${lastName}`;
    console.log("hello2");//wont do anything bc return finishes 
})

console.log("after map", newDestructuredNames);

//Calculating for area of a shape/figure

const triangles = [
    // (base*height)/2
    {base: 100, height: 200},
    {base: 50, height: 100},
    {base: 600, height: 700},
];

//calculate the area of the triangles inside the given triangles array
//pls use the map fucntion to return an array
// return: [10000, 2500, 2.1x10^5]

console.log("areal before mapping: ", triangles);

const destructuredAreal = triangles.map(({base, height})=>{
    //modify and return element
    //return Math.(${base}*${height})/2 = 
    return 1/2 * base * height;
});

console.log("areal after mapping: ", destructuredAreal);

const rectangles = [
    { length: 30, width: 20 },
    { length: 10, width: 10 },
    { length: 40, width: 40 },
  ];
  
  // Returns:
  // [ 600, 100, 1600 ]
  const rectangleAreas = rectangles.map((rectangle) => rectangle.length * rectangle.width);
  
console.log(rectangleAreas);





