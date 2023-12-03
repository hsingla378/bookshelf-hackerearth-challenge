import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Header from "../../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="homepage">
        <div className="page-buttons">
          <Link to="/admin">
            <button className="page-link-button">Admin</button>
          </Link>
          <Link to="/books">
            <button className="page-link-button">BookShelf</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
