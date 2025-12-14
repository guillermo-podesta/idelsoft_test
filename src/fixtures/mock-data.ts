/**
 * Mock data for API responses
 */

// Mock Books Data (Used by TC4-TC8)
export const MOCK_BOOKS = [
  {
    bookId: 1,
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    price: 19.99,
    coverFileName: "harry-potter-1.jpg",
    description: "The first book in the Harry Potter series"
  },
  {
    bookId: 2,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    price: 29.99,
    coverFileName: "lotr.jpg",
    description: "Epic fantasy adventure"
  },
  {
    bookId: 3,
    title: "1984",
    author: "George Orwell",
    category: "Dystopian",
    price: 14.99,
    coverFileName: "1984.jpg",
    description: "A dystopian social science fiction novel"
  },
  {
    bookId: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Classic",
    price: 12.99,
    coverFileName: "mockingbird.jpg",
    description: "American classic novel"
  },
  {
    bookId: 5,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic",
    price: 10.99,
    coverFileName: "gatsby.jpg",
    description: "The story of the mysteriously wealthy Jay Gatsby"
  }
];

// Mock Categories Data (Used by book mocking)
export const MOCK_CATEGORIES = [
  "Fantasy",
  "Dystopian",
  "Classic",
  "Science Fiction",
  "Mystery",
  "Romance",
  "Thriller"
];
