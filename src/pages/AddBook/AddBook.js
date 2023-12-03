import React, { useState } from "react";
import Header from "../../components/Header";
import "./AddBook.css";

const initialBook = {
  name: "",
  isbn: "",
  category: "",
  row: 0,
  count: 0,
  cost: 0,
  available: true,
};

const AddBook = () => {
  const [bookList, setBookList] = useState([
    {
      name: "Rich Dad Poor Dad",
      isbn: "4534354354343",
      category: "drama",
      row: 5,
      count: 548,
      cost: 700,
      available: true,
    },
    {
      name: "Another Book",
      isbn: "1234567890123",
      category: "fiction",
      row: 3,
      count: 200,
      cost: 500,
      available: false,
    },
  ]);

  const [newBook, setNewBook] = useState(initialBook);
  const [filteredBookList, setFilteredBookList] = useState(bookList);
  const [notFoundMessage, setNotFoundMessage] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const addBook = () => {
    setBookList([...bookList, newBook]);
    setFilteredBookList([...bookList, newBook]);
    setNewBook(initialBook);
    setShowAddForm(false);
    setNotFoundMessage("");

    // can add the API Call here
    alert("Book Successfully Added");
  };

  return (
    <>
      <Header />
      <div className="add-book-form">
        <h3>Add New Book</h3>
        <form>
          <label>
            Book Name:
            <input
              type="text"
              value={newBook.name}
              onChange={(e) => setNewBook({ ...newBook, name: e.target.value })}
            />
          </label>

          <label>
            ISBN:
            <input
              type="text"
              value={newBook.isbn}
              onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
            />
          </label>

          <label>
            Category:
            <input
              type="text"
              value={newBook.category}
              onChange={(e) =>
                setNewBook({ ...newBook, category: e.target.value })
              }
            />
          </label>

          <label>
            Row Number:
            <input
              type="number"
              value={newBook.row}
              onChange={(e) =>
                setNewBook({
                  ...newBook,
                  row: parseInt(e.target.value, 10),
                })
              }
            />
          </label>

          <label>
            Book Count:
            <input
              type="number"
              value={newBook.count}
              onChange={(e) =>
                setNewBook({
                  ...newBook,
                  count: parseInt(e.target.value, 10),
                })
              }
            />
          </label>

          <label>
            Cost:
            <input
              type="number"
              value={newBook.cost}
              onChange={(e) =>
                setNewBook({
                  ...newBook,
                  cost: parseInt(e.target.value, 10),
                })
              }
            />
          </label>

          <label>
            Availability:
            <input
              type="checkbox"
              checked={newBook.available}
              onChange={(e) =>
                setNewBook({ ...newBook, available: e.target.checked })
              }
            />
          </label>

          <button type="button" onClick={addBook}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
