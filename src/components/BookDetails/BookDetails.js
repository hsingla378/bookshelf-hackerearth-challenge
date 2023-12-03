import React, { useState, useRef } from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";
import { bookListMain } from "../../booksListMain";
import QRCode from "react-qr-code";
import "./BookDetails.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BookDetails = () => {
  const routeParams = useParams();
  const [isbn, setIsbn] = useState(routeParams.isbn);
  const [book, setBook] = useState(
    bookListMain.find((b) => b.isbn === parseInt(isbn))
  );
  const qrCodeRef = useRef(null);

  const downloadQRCode = () => {
    const svgElement = qrCodeRef.current;
    const svgString = new XMLSerializer().serializeToString(svgElement);

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);

      // Convert the canvas to a data URL and initiate download
      const dataUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = dataUrl;
      downloadLink.download = `book_${isbn}_qr.png`;
      downloadLink.click();
    };

    img.src =
      "data:image/svg+xml;base64," +
      btoa(unescape(encodeURIComponent(svgString)));
  };

  return (
    <div>
      <Header />
      <div className="book-details-container">
        <div className="book-details">
          <h2>{book.name} Details</h2>
          <p>ISBN: {book.isbn}</p>
          <p>Category: {book.category}</p>
          <p>Row Number: {book.row}</p>
          <p>Book Count: {book.count}</p>
          <p>Cost: {book.cost}</p>
          <p>Availability: {book.available ? "Available" : "Not Available"}</p>
        </div>

        <div className="qr-code-section">
          <div className="generated-qr-code">
            <QRCode
              size={256}
              value={window.location.href}
              ref={qrCodeRef}
              style={{ backgroundColor: "white", padding: "1rem" }}
            />
          </div>

          <button onClick={downloadQRCode} className="download-qr-btn">
            Download QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
