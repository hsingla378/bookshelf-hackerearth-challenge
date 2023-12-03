import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header>
      <Link to="/">
        <h1>BookShelf</h1>
      </Link>
      <nav>
        <Link to="/" className={isActiveLink("/") ? "active" : ""}>
          Home
        </Link>
        <Link to="/admin" className={isActiveLink("/admin") ? "active" : ""}>
          Admin
        </Link>
        <Link to="/books" className={isActiveLink("/books") ? "active" : ""}>
          Books
        </Link>
        <Link to="/add" className={isActiveLink("/add") ? "active" : ""}>
          Add a Book
        </Link>
      </nav>
    </header>
  );
};

export default Header;
