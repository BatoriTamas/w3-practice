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

// for (let i= 0; i <2; i++) {
//   console.log(favoriteBooks[i].title);
// }

const bookTitleOne = favoriteBooks[0].title
const bookTitleTwo = favoriteBooks[1].title

if (favoriteBooks[0].isNewerThan2000 === true) {
  
  console.log("This book is newer than 2000:" + bookTitleOne)
} else {
  console.log("This book is older than 2000:" + bookTitleTwo)
};

if (favoriteBooks[1].isNewerThan2000 === true) {
  
  console.log("This book is newer than 2000:" + bookTitleOne)
} else {
  console.log("This book is older than 2000:" + bookTitleTwo)
};

