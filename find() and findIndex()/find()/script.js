// find() will stop once it has found the (first) match
/*
const values = [100, 200, 300, 400, 500];

const newArray = values.find((element, index, array) => {
  // Return true if you find the element you want
  // Return false if you haven't found the element you want
});
*/

//find the element with a value of 5
const values = [1, 2, 4, 5, 6, 7, 88, 100, 3];

const foundValue = values.find((currentValue) => {
  // Return true if you find the element you want
  // Return false if you haven't found the element you want
  // the condition will be: if my current value equals 5 return true
  if(currentValue===5){
    return true;
  }
});
console.log("foundValue: ", foundValue);

// example 2
// given an array of temperatures
// find the first temperature over 120 fahrenheit

const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

// const foundTemperature = temperatures.find((highTemperature) => {
//   // Return true if you find the element you want
//   // Return false if you haven't found the element you want
//   if(highTemperature>120){
//     return true;
//   }
// });
// console.log("highTemperature: ", foundTemperature);

//with refactoring
const foundTemperature = temperatures.find((temperature) => temperature > 120);
console.log("highTemperature: ", foundTemperature);

const users = [
  {
    name: "hesham",
    age: 30
  },
  {
    name: "uzo",
    age: 30
  },
  {
    name: "mats",
    age: 30
  }
];

console.log(users);
console.log(users[1]);
console.log(users[1].name);
/*
const profiles =[
  {
      name: "Uzo",
      id: 234234
  },
  {
      name: "Hesh",
      id: 78787
  },
  {
      name: "Emil",
      id: 777763
  },
  {
      name: "Clark",
      id: 673254782365472
  }
];
*/

// !!!!!!!!!MAKE SURE YOU CONVERT TO LOWERCASE!!!!!!
// HOW TO CONVERT TO LOWER CASE:


const profiles =[
  {
      name: "Uzo",
      id: 234234
  },
  {
      name: "Hesh",
      id: 78787
  },
  {
      name: "Emil",
      id: 777763
  },
  {
      name: "Clark",
      id: 673254782365472
  }
];

console.log(profiles);
console.log("original data: ", profiles[1]);
console.log("WITH LOWER CASE data: ", profiles[1].name.toLowerCase());
console.log(profiles[1].name);

// in the given array of profiles, 
// find the first result starting with a lower case letter h



const firstProfileWithSmallH = profiles.find((profile) => {
  // Return true if you find the element you want
  // Return false if you haven't found the element you want
  // condition see line 111
  // JS considers every string as an array with objects instead of letters
  if(profile.name[0].toLowerCase() === "h"){
    return true
  }
});

console.log(firstProfileWithSmallH);

//EXAMPLE 3, out of stock/not found

const books = [
  { title: 'Building a Spaceship', inStock: false },
  { title: 'Growing Orchids', inStock: false },
  { title: 'River Fisher', inStock: true }
]

const foundBook = books.find((book)=>{
  if(book.inStock === true) {
    return true;
  }
});
/*
"foundBook" will be undefined if there are no books
found by the find() array method
 */


if (foundBook === undefined) {
  console.log("No books in stock");
} else {
  console.log("first book in stock:", foundBook.title);
}














//console.log(user.age);

/*
const  = [];

const  = .find((element, index, array) => {
  // Return true if you find the element you want
  // Return false if you haven't found the element you want
});
*/
















