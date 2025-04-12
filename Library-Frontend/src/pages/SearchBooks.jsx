

{/*}

// Another code is   dummy code

import React, { useEffect, useState } from "react";
import axios from "axios";
//import { useUser } from "../lbcomponents/UserContext"; 
import {useUser} from "../lbcomponents/UserContext"; 
//import BorrowedBook from "./BorrowedBooks"; // Import BorrowedBook Component

const SearchBook = () => {
  const { userId, setUserId } = useUser();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setMessage("User ID not found. Please log in again.");
    }
    fetchBooks();
  }, [setUserId]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/books");
      setBooks(response.data);
    } catch {
      setMessage("Error loading books. Try again.");
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchBooks();
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8080/api/books/search?keyword=${searchTerm}`
      );
      setBooks(response.data);
    } catch (error) {
      setMessage("Search failed. Try again.");
    }
  };

  const handleBorrow = async (bookId) => {
    if (!userId) {
      setMessage("User ID not found. Please try again.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/api/borrow-book/${userId}/${bookId}`
      );
      setMessage(response.data);
      fetchBooks();
    } catch (error) {
      setMessage("Failed to borrow book. It may already be borrowed.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">📚 Search & Borrow Books</h2>

      {message && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{message}</div>}

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          🔍 Search
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 bg-white rounded shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Author</th>
              <th className="p-3">ISBN</th>
              <th className="p-3">Category</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book) => (
                <tr key={book.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{book.title}</td>
                  <td className="p-3">{book.author}</td>
                  <td className="p-3">{book.isbn}</td>
                  <td className="p-3">{book.category}</td>
                  <td className="p-3">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      onClick={() => handleBorrow(book.id)}
                    >
                      📖 Borrow
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Render BorrowedBook Component and pass userId
      
    </div>
  );
};

export default SearchBook;

*/}



{/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../lbcomponents/UserContext"; 

const SearchBook = () => {
  const { userId, setUserId } = useUser();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setMessage("User ID not found. Please log in again.");
    }
    fetchBooks();
  }, [setUserId]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/books");
      setBooks(response.data);
    } catch {
      setMessage("Error loading books. Try again.");
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchBooks();
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8080/api/books/search?keyword=${searchTerm}`
      );
      setBooks(response.data);
    } catch (error) {
      setMessage("Search failed. Try again.");
    }
  };

  const handleBorrow = async (bookId) => {
    if (!userId) {
      setMessage("User ID not found. Please try again.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/api/borrow-book/${userId}/${bookId}`
      );
      setMessage(response.data);
      fetchBooks();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMessage(error.response.data); // Display error from backend
      } else {
        setMessage("Failed to borrow book. Try again later.");
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">📚 Search & Borrow Books</h2>

      {message && (
        <div className="mb-4 p-3 bg-red-200 text-red-800 border-l-4 border-red-700 rounded-lg">
          {message}
        </div>
      )}

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          🔍 Search
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 bg-white rounded shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Author</th>
              <th className="p-3">ISBN</th>
              <th className="p-3">Category</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book) => (
                <tr key={book.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{book.title}</td>
                  <td className="p-3">{book.author}</td>
                  <td className="p-3">{book.isbn}</td>
                  <td className="p-3">{book.category}</td>
                  <td className="p-3">{book.quantity}</td>
                  <td className="p-3">
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      onClick={() => handleBorrow(book.id)}
                    >
                      📖 Borrow
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBook;
*/}




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../lbcomponents/UserContext";

const SearchBook = () => {
  const { userId, setUserId } = useUser();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setMessage("User ID not found. Please log in again.");
    }
    fetchBooks();
  }, [setUserId]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/books");
      setBooks(response.data);
    } catch {
      setMessage("Error loading books. Try again.");
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchBooks();
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8080/api/books/search?keyword=${searchTerm}`
      );
      setBooks(response.data);
    } catch (error) {
      setMessage("Search failed. Try again.");
    }
  };

  const handleBorrow = async (bookId) => {
    if (!userId) {
      setMessage("User ID not found. Please try again.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/api/borrow-book/${userId}/${bookId}`
      );
      setMessage(response.data);
      fetchBooks();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setMessage(error.response.data);
      } else {
        setMessage("Failed to borrow book. Try again later.");
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">📚 Search & Borrow Books</h2>

      {message && (
        <div className="mb-4 p-3 bg-red-200 text-red-800 border-l-4 border-red-700 rounded-lg">
          {message}
        </div>
      )}

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search by title or author..."
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          🔍 Search
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 bg-white rounded shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Author</th>
              <th className="p-3">ISBN</th>
              <th className="p-3">Category</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book) => (
                <tr key={book.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{book.title}</td>
                  <td className="p-3">{book.author}</td>
                  <td className="p-3">{book.isbn}</td>
                  <td className="p-3">{book.category}</td>
                  <td className="p-3">{book.quantity}</td>
                  <td className="p-3">
                    <button
                      className={`px-3 py-1 rounded text-white ${book.quantity > 0 ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
                      onClick={() => book.quantity > 0 && handleBorrow(book.id)}
                      disabled={book.quantity === 0}
                      title={book.quantity === 0 ? "Book is not available" : "Borrow this book"}
                    >
                      📖 Borrow
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-3 text-center text-gray-500">
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchBook;
