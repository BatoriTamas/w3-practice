let favoriteBooks = [
  {
      title: "Öreg néne őzikéje",
      author: "Fazekas Anna",
      year: 1952,
      isNewerThan2000: false,
  },
  {
      title: "Szamárfül",
      author: "Romhányi József",
      year: 2003,
      isNewerThan2000: true
  }
]

// for (const book of favoriteBooks) {
//   console.log(book.title)
// }

// for (let i = 0; i < favoriteBooks.length; i++) {
//   console.log(favoriteBooks[i].author)
// }

for (let i= 0; i <2; i++) {
  console.log(favoriteBooks[i].title);
}