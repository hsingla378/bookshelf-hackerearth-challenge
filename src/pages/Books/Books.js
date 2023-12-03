import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { bookListMain } from "../../booksListMain";
import "./Books.css";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = bookListMain.filter(
    (book) =>
      book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.isbn.toString().includes(searchQuery)
  );

  return (
    <div>
      <Header />
      <div className="books-container">
        <div className="books-list">
          <h2>Book List</h2>
          <input
            type="text"
            placeholder="Search by ISBN or Book Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-box"
          />
          <div className="book-cards">
            {filteredBooks.length === 0 ? (
              <p>No matching books found.</p>
            ) : (
              filteredBooks.map((book, index) => (
                <div key={index} className="book-card">
                  <h3>{book.name}</h3>
                  <p>ISBN: {book.isbn}</p>
                  <p>Category: {book.category}</p>
                  <p>Row Number: {book.row}</p>
                  <p>Book Count: {book.count}</p>
                  <p>Cost: {book.cost}</p>
                  <p>
                    Availability:{" "}
                    {book.available ? "Available" : "Not Available"}
                  </p>
                  <Link to={`/book/${book.isbn}`} className="book-detail-link">
                    <button className="details-button">Details</button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
