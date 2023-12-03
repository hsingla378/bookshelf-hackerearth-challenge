import React, { useState, useRef } from "react";
import Header from "../Header";
import { useParams } from "react-router-dom";
import { bookListMain } from "../../booksListMain";
import QRCode from "react-qr-code";
import "./BookDetails.css";

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
        <h2>{book.name} Details</h2>
        <p>ISBN: {book.isbn}</p>
        <p>Category: {book.category}</p>
        <p>Row Number: {book.row}</p>
        <p>Book Count: {book.count}</p>
        <p>Cost: {book.cost}</p>
        <p>Availability: {book.available ? "Available" : "Not Available"}</p>

        {/* Generated QR Code */}
        <div className="generated-qr-code">
          <QRCode size={256} value={window.location.href} ref={qrCodeRef} />
          <button onClick={downloadQRCode}>Download QR Code</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
