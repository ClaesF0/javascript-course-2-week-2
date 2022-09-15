// an object {} is a datatype, like boolean, number, string, etcetera

const person = {
    name: "Hesham", // name is the KEY, the VALUE is hesham
    lastName: "El Masry",
    age: 30
}
// the first way to access info in object is DOT NOTATION (person.name)
console.log(person.age);

// the next one is by using the BRACKET NOTATION  [], this is very useful when one cannot use dot notation
// console.log(person["key"])
console.log(person["name"]);
console.log(person["lastName"]);
console.log(person["age"]);

const recipe = {
    "ingredient_0" : "Egg",
    "ingredient_1" : "Milk",
    "ingredient_2" : "Flour",
}

const ingredient0 = recipe["ingredient_0"]
console.log(ingredient0)
const ingredient1 = recipe["ingredient_"+1]

for(let i = 0; i <= 2; i++){//it will start it count at 0 and count one more each time until it counted to 2
    console.log("this is 'i'", i)
    console.log("with the for-loop counting:", recipe["ingredient_" + i]);
    //i=0
    //recipe["ingredient_"+0]
    //egg
     //i=1
    //recipe["ingredient_"+1]
    //milk
     //i=2
    //recipe["ingredient_"+2]
    //flour
}


const student = {
    name: "claes", // name is the KEY, the VALUE is hesham
    lastName: "folkestad",
    age: 34
}

for(const theKey in student){
    console.log(student[theKey]);
}

carProfile = {
    make: "BMW",
    year: 2015,
    vinNumber: 343434
}
//use a for in loop
//console log for me "key: " and the "value" (of the key)
// what i want in console log is
//console.log("the make is: ", make);
//console.log("the year is: ", year);
//console.log("the vin number is: ", vinNumber); 

for (const myKey in carProfile){
    console.log("the " + myKey + " is " + carProfile[myKey]);
}
/*
console.log("the make is: " make);
console.log("the year is: " year);
console.log("the vin number is: " vinNumber); 
*/

/* OBJECT METHODS */
//THE FIRST ONE IS CALLED: Object.keys()

//syntax
const userProfile = {
    name:"mats",
    age:"26"
}

Object.keys(userProfile);
//expect to have those keys in array
const userProfileKeys = Object.keys(userProfile);
// ["name", "age"]
console.log(userProfileKeys);

//object.values()

console.log(Object.values(userProfile));
//["mats",26]

//what if i want it like this?:
//["name","mats"]
//["age",26]
//then i use
//Object.entries()
const userProfileEntriesArr = Object.entries(userProfile);
console.log("userProfileEntriesArr: ", userProfileEntriesArr);



