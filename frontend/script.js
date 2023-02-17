// // TODO: define addFavoritePlace(..) function

// function addFavoritePlace(placeName) {
//   if(!placeName.includes("Great")){
//     favoritePlaces.push(placeName)
//   }
//   else {
//     return true
//   }
// }

// // TODO: define printFavoritePlaces() function

// function printFavoritePlaces() {
//   console.log(Favorite Places: ${favoritePlaces.length}`) 
//   for (let place of favoritePlaces){
//     console.log(place)
//   }
// }

// let favoritePlaces = []

// addFavoritePlace("Galápagos Islands")
// addFavoritePlace("Great Pyramid of Giza")
// addFavoritePlace("Eiffel Tower")
// addFavoritePlace("Great Wall of China")
// addFavoritePlace("Trans Bhutan Trail")
// addFavoritePlace("Colosseum of Rome")
// addFavoritePlace("Great Smoky Mountains National Park")

// // TODO: print out favorite places

// /* console.log(favoritePlaces) */

// printFavoritePlaces()


// let availablePlaces = ["Galápagos Islands", "Great Pyramid of Giza", "Eiffel Tower", "Great Wall of China", "Trans Bhutan Trail", "Colosseum of Rome", "Great Smoky Mountains National Park" ]

// let favoritePlaces = []

// function addFavoritePlace(placeName) {
//     if(!placeName.includes("Great")) {
//         favoritePlaces.push(placeName)
//     }
// }

// function printFavoritePlaces() {
//     // console.log('Favorite places ' + favoritePlaces.length)
//     console.log(`Favorite place ${favoritePlaces.length}`)
//     for (place of favoritePlaces) {
//         console.log(place)
//     }
// }

// function planMyTrips () {
//     //do the selection
//     for (const place of availablePlaces) {
//         addFavoritePlace(place)
//     }
//     //print the list
//     printFavoritePlaces()
// }

// planMyTrips()














// The algorithm is the following:

// - IF the concatenated names of the two people have even number of characters
// - AND the two "people" do not have significantly different amount of eyes (diff max 5)
// - THEN they are a perfect match

// the only exception is if one of them is one of the most loved people on earth. In this case they become a perfect match independently from other characteristics.

// ### Your task

// Check the code below. Please fill the missing calculations and condition to fit to the algorithm above!
// const person1 = 'Cyclops';
// const person2 = 'Princess Diana';
// const numOfEyesOfFirst = 1;
// const numOfEyesOfSecond = 2;

// const joinedNames = '?'; // It is your task to change '?' to valid code
// const lengthOfJoinedNames = '?'; // change '?' to valid code
// const joinedNamesHasEvenCharacters = null; // it should be an expressions which gives true or false

// const diffOfNumOfEyesIsLow = 0; // it should be true or false. Hint: Math.abs(x) can be used, but there are other solutions too

// const mostLovedOnes = ['Princess Diana', 'David Attenborough', 'Rowan Atkinson', 'David Beckham'];
// const person1IsPerfectToAnyone = null; // it should be true or false. Hint: you have learnt about a function which checks if an array includes an element
// const person2IsPerfectToAnyone = null; // it should be true or false

// if (true) { // final challenge: please code THE condition
//   console.log('❤️');
// } else {
//   console.log("😢");
// }
// `


const person1 = 'Cyclops';
const person2 = 'Princess Diana';
const numOfEyesOfFirst = 1;
const numOfEyesOfSecond = 2;

let joinedNames = person1 + person2;
    joinedNames = joinedNames.split(" ").join("");
    console.log(joinedNames);
const lengthOfJoinedNames = joinedNames.length;
    console.log(lengthOfJoinedNames)
const joinedNamesHasEvenCharacters = lengthOfJoinedNames % 2 ===0;
console.log(joinedNamesHasEvenCharacters);

const diffOfNumOfEyesIsLow = Math.abs(numOfEyesOfSecond - numOfEyesOfFirst) <= 5;
console.log(diffOfNumOfEyesIsLow);

const mostLovedOnes = ['Princess Diana', 'David Attenborough', 'Rowan Atkinson', 'David Beckham'];
person1IsPerfectToAnyone = mostLovedOnes.includes(person1)

console.log(person1IsPerfectToAnyone);

const person2IsPerfectToAnyone = mostLovedOnes.includes(person2)

console.log(person2IsPerfectToAnyone);

if ((joinedNamesHasEvenCharacters && diffOfNumOfEyesIsLow) || person1IsPerfectToAnyone || person2IsPerfectToAnyone) {
    console.log('❤️');
} else {
  console.log("😢");
}