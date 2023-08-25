import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";
import img from "../src/assets/images/img.png";
import Login from "../src/components/Login";
import { About } from "./components/About";

const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [selectedBook, setSelectedBook] = useState(null);

  const books = [
    {
      title: "Book 1",
      author: "Author 1",
      genre: "Fiction",
      description: "Description of Book 1",
      image: img,
    },
    {
      title: "Book 2",
      author: "Author 2",
      genre: "Fiction",
      description: "Description of Book 2",
      image: img,
    },
    {
      title: "Book 3",
      author: "Author 3",
      genre: "Fiction",
      description: "Description of Book 3",
      image: img,
    },
    {
      title: "Book 4",
      author: "Author 4",
      genre: "Fiction",
      description: "Description of Book 4",
      image: img,
    },
    {
      title: "Book 5",
      author: "Author 1",
      genre: "Fiction",
      description: "Description of Book 5",
      image: img,
    },
    {
      title: "Book 6",
      author: "Author 2",
      genre: "Non-Fiction",
      description: "Description of Book 6",
      image: img,
    },
    {
      title: "Book 7",
      author: "Author 4",
      genre: "Non-Fiction",
      description: "Description of Book 7",
      image: img,
    },
    {
      title: "Book 8",
      author: "Author 3",
      genre: "Non-Fiction",
      description: "Description of Book 8",
      image: img,
    },
  ];

  const navigate = (view) => {
    setCurrentView(view);
    setSelectedBook(null);
  };
  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="app">
      <Header />
      <Navigation navigate={navigate} />

      {currentView === "home" && <Home></Home>}

      {currentView === "all books" && (
        <BookList books={books} category="All" onBookClick={handleBookClick} />
      )}
      {currentView === "about" && <About />}
      {selectedBook && <BookDetails book={selectedBook} />}
      {currentView === "login" && <Login />}

      <Footer />
    </div>
  );
};

export default App;
