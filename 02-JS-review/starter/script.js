const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//destructuring
const books = getBook(3);

console.log(books);

const { pages, title, author, genres, publicationDate, hasMovieAdaptation } =
  books;

console.log(pages, title, author, genres);

//rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre);

console.log(otherGenres);
//spread operator
const newGenres = [...genres, "epic fantasy"];

console.log(newGenres);
//spread operator in objects, add a new property and overwrite an existing property
const updatedBook = {
  ...books,
  moviePublicationDate: "2001-12-19",
  pages: 1210,
};

updatedBook;

//arrow function declaration and expression

const getYear = (str) => {
  return str.split("-")[0];
};

console.log(getYear(publicationDate));

//template literals
const summary = `${title} is a book which was authored by ${author} and published in ${getYear(
  publicationDate
)}. The book is ${
  pages > 1000 ? "over a thousand" : "less than a thousand"
} pages long and has ${
  hasMovieAdaptation ? "" : "not"
} been adapted as a movie`;

summary;

//ternary operators - conditiion ? executed if condition met : executed if condition not met

pages > 1000 ? "over a thousand" : "less than a thousand";

//logical operator short-circuiting
//uses truthy and falsy values
//falsy: false , 0 , -0 , 0n , "" , null , undefined , NaN , and document
//truthy: everything else

// AND operator
console.log(true && "show if true");
console.log(false && "show if false");
console.log(hasMovieAdaptation && "This book has a movie");
console.log("Anirban" && "Strings");
console.log(0 && "other strings");

// OR operator
console.log(true || "Some string");
console.log(false || "other string");
console.log(0 || null);

//NULLISH COALESCING operator - returns RHS if LHS is null or undefined, else returns LHS
console.log(undefined ?? 0);
console.log(0 ?? undefined);

console.log(books.translations.bengali || "NOT TRANSLATED");

//optional chaining - ? - only continues along the object if the ? preceding objects are defined
console.log(books.reviews.librarything?.reviewsCount);
const countWrong = books.reviews.librarything?.reviewsCount || "no data";
countWrong;

const getTotalReviewCount = (books) => {
  const goodread = books.reviews?.goodreads?.reviewsCount;
  const libany = books.reviews?.librarything?.reviewsCount ?? 0;
  return goodread + libany;
};

console.log(getTotalReviewCount(books));

//functional array methods - returns new array instead of original array

// map method
books;

const x = [1, 2, 3, 4, 5];
console.log(x.map((el) => el * 2));

const book = getBooks();
const titles = book.map((el) => el.title);
console.log(titles);

const essentials = book.map((el) => {
  return { title: el.title, author: el.author };
});

essentials;

//filter method
const longBooks = book.filter((el) => el.pages > 500);
longBooks;

const longBooksWithMovie = book
  .filter((el) => el.pages > 500)
  .filter((el) => el.hasMovieAdaptation);

longBooksWithMovie;

const adventureBooks = book
  .filter((el) => el.genres.includes("adventure"))
  .map((el) => el.title);

adventureBooks;

//reduce method

const pagesAllBooks = book.reduce((acc, el) => acc + el.pages, 0);
pagesAllBooks;

//sort method - unlike other methods, sort method mutates the original array instead of creating a
// brand new copy. So it is essential that a copy is created beforehand.

const z = [3, 5, 1, 9, 2, 4, 7, 1, 0, 4, 8, 6, 4];
const sorted = z.sort((a, b) => a - b);
sorted;

//descending order
const sortedByPages = book.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

//working with immutable arrays
//// 1) Add a book object to array

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...book, newBook]; // spread the current object and append the new object

booksAfterAdd;

//// 2) delete book from array

const booksAfterDelete = booksAfterAdd.filter((el) => el.id !== 3);
booksAfterDelete;

//// 3) Update a book object while inside the array

const booksAfterUpdate = booksAfterDelete.map((el) =>
  el.id === 1 ? { ...el, pages: 123 } : el
);

booksAfterUpdate;
