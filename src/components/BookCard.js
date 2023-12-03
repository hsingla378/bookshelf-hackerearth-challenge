import React from "react";

const BookCard = () => {
  const handleOptionClick = (option) => {
    console.log(`Navigating to ${option} page`);
  };

  return (
    <div className="options-container">
      <div className="option-card" onClick={() => handleOptionClick("add")}>
        <h2>Add a Book</h2>
        <p>Click to add a new book to the database.</p>
        <button className="option-button">Add Book</button>
      </div>
      <div className="option-card" onClick={() => handleOptionClick("search")}>
        <h2>Search for a Book</h2>
        <p>Click to search for a book in the database.</p>
        <button className="option-button">Search Book</button>
      </div>
      <div className="option-card" onClick={() => handleOptionClick("edit")}>
        <h2>Edit a Book</h2>
        <p>Click to edit information about an existing book.</p>
        <button className="option-button">Edit Book</button>
      </div>
      <div className="option-card" onClick={() => handleOptionClick("delete")}>
        <h2>Delete a Book</h2>
        <p>Click to remove a book from the database.</p>
        <button className="option-button">Delete Book</button>
      </div>
    </div>
  );
};

export default BookCard;
