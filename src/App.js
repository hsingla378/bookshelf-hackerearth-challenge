import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Admin from "./pages/Admin/Admin";
import Books from "./pages/Books/Books";
import AddBook from "./pages/AddBook/AddBook";
import BookDetails from "./components/BookDetails/BookDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="/book/:isbn" element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
