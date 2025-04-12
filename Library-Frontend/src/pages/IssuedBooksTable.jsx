
{/*

import { useState, useEffect } from "react";
import axios from "axios";

const IssuedBooksTable = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/issued-books")
      .then(response => setBooks(response.data))
      .catch(error => console.error("Error fetching issued books:", error));
  }, []);

  // ✅ Return book function
  const returnBook = (borrowId) => {
    axios.put(`http://localhost:8080/api/return-book/${borrowId}`)
      .then(() => setBooks(books.filter(b => b.id !== borrowId)))
      .catch(error => console.error("Error returning book:", error));
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">📚 Issued Books</h2>
      
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">User</th>
            <th className="border p-2">Phone No</th>
            <th className="border p-2">Book Title</th>
            <th className="border p-2">Issued Date</th>
            <th className="border p-2">Fine</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border">
              <td className="border p-2">{book.user.name}</td>
              <td className="border p-2">{book.user.phone}</td>
              <td className="border p-2">{book.book.title}</td>
              <td className="border p-2">{book.borrowedDate}</td>
              <td className="border p-2">{book.fine || "No Fine"}</td>
              <td className="border p-2">{book.isReturned ? "Returned" : "Issued"}</td>
              <td className="border p-2">
                {!book.isReturned && (
                  <button 
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => returnBook(book.id)}
                  >
                    Return
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssuedBooksTable;
*/}
{/*
import { useState, useEffect } from "react";
import axios from "axios";

const IssuedBooksTable = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchIssuedBooks();
  }, []);

  // ✅ Fetch issued books
  const fetchIssuedBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/issued-books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching issued books:", error);
    }
  };

  // ✅ Return book and update UI
  const returnBook = async (borrowId) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/return-book/${borrowId}`);
      alert(response.data);  // Show fine amount

      // ✅ Update book status without removing it
      setBooks(books.map(book => 
        book.id === borrowId ? { ...book, isReturned: true, fine: "Updated" } : book
      ));
    } catch (error) {
      console.error("Error returning book:", error);
      alert("Failed to return book.");
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">📚 Issued Books</h2>
      
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">User</th>
            <th className="border p-2">Phone No</th>
            <th className="border p-2">Book Title</th>
            <th className="border p-2">Issued Date</th>
            <th className="border p-2">Fine</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border">
              <td className="border p-2">{book.user.name}</td>
              <td className="border p-2">{book.user.phone}</td>
              <td className="border p-2">{book.book.title}</td>
              <td className="border p-2">{book.borrowedDate}</td>
              <td className="border p-2">{book.fine || "No Fine"}</td>
              <td className="border p-2">{book.isReturned ? "Returned ✅" : "Issued 📖"}</td>
              <td className="border p-2">
                {!book.isReturned && (
                  <button 
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700"
                    onClick={() => returnBook(book.id)}
                  >
                    Return
                  </button>
                )}
              </td>
            </tr>
          ))}
          {books.length === 0 && (
            <tr>
              <td colSpan="7" className="border p-4 text-center text-gray-500">
                No issued books
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default IssuedBooksTable;
*/}

import { useState, useEffect } from "react";
import axios from "axios";

const IssuedBooksTable = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
      axios.get("http://localhost:8080/api/issued-books")
      .then(response => setBooks(response.data))
      
      .catch(error => console.error("Error fetching issued books:", error));
  }, []);

  // ✅ Return book function
  const returnBook = (borrowId) => {
      axios.put(`http://localhost:8080/api/return-book/${borrowId}`)
      .then(() => {
       alert("Book returned successfully!"); 
        setBooks(books.filter(b => b.id != borrowId)); // Remove from issued books
      })
      .catch(error => console.error("Error returning book:", error));
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">📚 Issued Books</h2>
      
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">User</th>
            <th className="border p-2">Phone No</th>
            <th className="border p-2">Book Title</th>
            <th className="border p-2">Issued Date</th>
            <th className="border p-2">Fine</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border">
              <td className="border p-2">{book.user.name}</td>
              <td className="border p-2">{book.user.phone}</td>
              <td className="border p-2">{book.book.title}</td>
              <td className="border p-2">{new Date(book.borrowedDate).toDateString()}</td>
              <td className="border p-2">{book.fine}</td>
              <td className="border p-2">{book.isReturned ? "Returned" : "Issued"}</td>
              <td className="border p-2">
                {!book.isReturned && (
                  <button 
                    className="bg-green-500 text-white px-3 py-1 rounded"
                    onClick={() => returnBook(book.id)}
                  >
                    Return
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssuedBooksTable;
