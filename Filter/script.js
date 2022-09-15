  // Return true if you want to keep the item in the array being returned
  // Return false if you don't want the item to be included in the array being returned
//EXAMPLE 1 


//const numbers = [2, 4, 55, 66];
//i want to filter all the numbers greater than or equal to 4
//this means in my new array i will get 4, 55 and 66
// 
// const filteredNumbers = numbers.filter((number)=>{
//     // return to me in the new array all the numbers that are greater than or equal to 4
//     if(number >= 4){
//         return true; 
//     } else {
//         return false;
//     }
// });
// 
// console.log(filteredNumbers);
// //[4,55,66]
// 
//another way, only simplyfied
// const numbers = [2, 4, 55, 66];
// const filteredNumbers = numbers.filter((number)=>number>= 4);
// console.log(filteredNumbers);

const values = [0,23,55,66,777,100,500,250];
function filterGreaterEqual100(arr){
    const filteredValues = arr.filter((item)=>{
        if(item >= 100){
            return true
        } else {
            return false
        }
    })
    return filteredValues
}

const myFilteredValues = filterGreaterEqual100(values);
console.log(myFilteredValues);

//or simplified
//const values = [0,23,55,66,777,100,500,250];
//find values greater than or equal to 100
const filteredValues2 = values.filter((number)=>number>=100);
console.log(filteredValues2);

//EXAMPLE 3
const people = [
    { name: 'Kari', age: 28 },
    { name: 'Astrid', age: 32 },
    { name: 'Hans', age: 22 },
    { name: 'Inger', age: 19 },
    { name: 'Liv', age: 42 },
    { name: 'Kristoffer', age: 12 },
    { name: 'Anne', age: 12 },
    { name: 'Martin', age: 17 },
    { name: 'Joakim', age: 45 },
    { name: 'Ellen', age: 7 },
]

//filter only the people above or eaqual age 22 
// 
// unction filteredPeople (arr){
//    const filteredAge = arr.filter((item)=>{
//        if (age >= 22){
//            return true
//        } else {
//            return false
//        }
//    })
//    return filteredAge
// 
// onst myFilteredPeople = 
// 
//
//onst adults = people.filter((person)=>{
//   if(person.age >= 22) {
//       return true;
//   }
//);
//onsole.log("adults", adults)
//

///SAME AS ABOVE WITH REFACTORING

const adults = people.filter(({age})=> age >= 22);
console.log("adults", adults)

//IN THIS EXAMPLE WE HAVE A LIST OF GAMES
//WE WANT TO FILTER  GAMES WITH RATING OF 8 OR HIGHER


const games = [
    { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
    { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
    { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
    { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
    { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
];

//GREATER THAN 8

const bestGames = games.filter(({rating})=> rating > 8);
console.log("games with rating above 8 are: ", bestGames);

//will return only Build-a-farm

const goodGames = games.filter(({rating})=> rating >= 8);
console.log("games with rating equal to or above 8 are: ", goodGames);

//8 or higher AND multiplayer

// isMultiplayer === true && rating >= 8

/*
const filteredGames = games.filter((game)=>{
    if((game.isMultiplayer===true) && (game.rating >= 8)){
        return true;
    }
});

console.log("multiplayer games rated 8 or above:", filteredGames);
*/

const filteredGames = games.filter(({isMultiplayer, rating})=>((isMultiplayer === true) && (rating >=8)));
console.log("multiplayer games rated 8 or above:", filteredGames);





