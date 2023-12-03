import React, { useState } from "react";
import "./Admin.css";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { bookListMain } from "../../booksListMain";

const Admin = () => {
  const [bookList, setBookList] = useState(bookListMain);
  const [filteredBookList, setFilteredBookList] = useState(bookList);
  const [notFoundMessage, setNotFoundMessage] = useState("");

  const deleteBook = (isbn) => {
    const updatedBookList = bookList.filter((book) => book.isbn !== isbn);
    setBookList(updatedBookList);
    setFilteredBookList(updatedBookList);
  };

  const searchBook = (searchTerm) => {
    const result = bookList.filter(
      (book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(book.isbn).includes(searchTerm) // Convert isbn to string before using includes
    );
    setFilteredBookList(result);
  
    if (result.length === 0) {
      setNotFoundMessage("No matching books found.");
    } else {
      setNotFoundMessage("");
    }
  };
  

  const editBook = (isbn, updatedBook) => {
    const updatedBookList = bookList.map((book) =>
      book.isbn === isbn ? updatedBook : book
    );
    setBookList(updatedBookList);
    setFilteredBookList(updatedBookList);
  };

  return (
    <div>
      <Header />
      <div className="books-container">
        <div className="books-list">
          <h2>Book List</h2>
          <div className="book-list-header">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search by ISBN or Book Name"
                onChange={(e) => searchBook(e.target.value)}
                className="input-box"
              />
            </div>
            <Link to="/add">
              <button
                // onClick={() => setShowAddForm(true)}
                className="add-book-button"
              >
                Add Book
              </button>
            </Link>
          </div>

          {notFoundMessage ? (
            <p className="not-found-message">{notFoundMessage}</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>ISBN Number</th>
                  <th>Category</th>
                  <th>Row Number</th>
                  <th>Book Count</th>
                  <th>Cost</th>
                  <th>Availability</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookList.map((book, index) => (
                  <tr key={index}>
                    <td>{book.name}</td>
                    <td>{book.isbn}</td>
                    <td>{book.category}</td>
                    <td>{book.row}</td>
                    <td>{book.count}</td>
                    <td>{book.cost}</td>
                    <td>{book.available ? "Available" : "Not Available"}</td>
                    <td className="actions">
                      <button onClick={() => deleteBook(book.isbn)}>
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          const updatedBook = prompt(
                            "Enter updated book details:",
                            JSON.stringify(book)
                          );
                          if (updatedBook) {
                            editBook(book.isbn, JSON.parse(updatedBook));
                          }
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
