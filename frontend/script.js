// TODO: define addFavoritePlace(..) function

function addFavoritePlace(placeName) {
  if(!placeName.includes("Great")){
    favoritePlaces.push(placeName)
  }
  else {
    return true
  }
}

// TODO: define printFavoritePlaces() function

function printFavoritePlaces() {
  console.log(Favorite Places: ${favoritePlaces.length}`) 
  for (let place of favoritePlaces){
    console.log(place)
  }
}

let favoritePlaces = []

addFavoritePlace("Galápagos Islands")
addFavoritePlace("Great Pyramid of Giza")
addFavoritePlace("Eiffel Tower")
addFavoritePlace("Great Wall of China")
addFavoritePlace("Trans Bhutan Trail")
addFavoritePlace("Colosseum of Rome")
addFavoritePlace("Great Smoky Mountains National Park")

// TODO: print out favorite places

/* console.log(favoritePlaces) */

printFavoritePlaces()