

{/*

import { useEffect, useState } from "react";
import axios from "axios";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const userId = 1; // Replace with actual user ID

  useEffect(() => {
    axios.get(`http://localhost:8080/api/borrowed-books/${userId}`).then((response) => {
      setBorrowedBooks(response.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📖 Borrowed Books</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Title</th>
            <th className="border p-2">Author</th>
            <th className="border p-2">Borrowed Date</th>
            <th className="border p-2">Return Date</th>
          </tr>
        </thead>
        <tbody>
          {borrowedBooks.map((book) => (
            <tr key={book.id}>
              <td className="border p-2">{book.title}</td>
              <td className="border p-2">{book.author}</td>
              <td className="border p-2">{book.borrowedDate}</td>
              <td className="border p-2">{book.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowedBook;
*/}

{/*

import { useState, useEffect } from "react";
import axios from "axios";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [bookId, setBookId] = useState("");

  // Fetch Borrowed Books
  useEffect(() => {
    fetchBorrowedBooks();
  }, []);

  const handleReturn = async (bookId) => {
    try {
      const response = await axios.post(`http://localhost:8080/api/borrowed-books/return?bookId=${bookId}`);
      alert("Book returned successfully!");
      fetchBorrowedBooks(); // Refresh the list after returning
    } catch {
      console.error("Error returning book:", error);
      alert("Failed to return the book.");
    }
  };

  const fetchBorrowedBooks = () => {
    axios
      .get("http://localhost:8080/api/borrowed-books")
      .then((response) => {
        setBorrowedBooks(response.data);
      })
      .catch((error) => console.error("Error fetching borrowed books:", error));
  };

  // Borrow a Book
  const handleBorrowBook = () => {
    if (!studentId || !bookId) {
      alert("Please enter student ID and book ID");
      return;
    }

    axios
      .post(`http://localhost:8080/api/borrowed-books/borrow?studentId=${studentId}&bookId=${bookId}`)
      .then((response) => {
        alert(response.data);
        fetchBorrowedBooks(); // Refresh table
      })
      .catch((error) => console.error("Error borrowing book:", error));
  };

  // Return a Book
  const handleReturnBook = (borrowedBookId) => {
    axios
      .post(`http://localhost:8080/api/borrowed-books/return?borrowedBookId=${borrowedBookId}`)
      .then((response) => {
        alert(response.data);
        fetchBorrowedBooks(); // Refresh table
      })
      .catch((error) => console.error("Error returning book:", error));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📚 Borrow & Return Books</h2>

      {/* Borrow Book Form */}
//       <div className="mb-4 p-4 border rounded">
//         <h3 className="font-semibold mb-2">Borrow a Book</h3>
//         <input
//           type="number"
//           placeholder="Enter Student ID"
//           className="border p-2 mr-2"
//           value={studentId}
//           onChange={(e) => setStudentId(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Enter Book ID"
//           className="border p-2 mr-2"
//           value={bookId}
//           onChange={(e) => setBookId(e.target.value)}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={handleBorrowBook}
//         >
//           Borrow Book
//         </button>
//       </div>

//       {/* Borrowed Books Table */}
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Borrow ID</th>
//             <th className="border p-2">Student ID</th>
//             <th className="border p-2">Book ID</th>
//             <th className="border p-2">Borrow Date</th>
//             <th className="border p-2">Return Book</th>
//           </tr>
//         </thead>
//         <tbody>
//           {borrowedBooks.map((book) => (
//             <tr key={book.id}>
//               <td className="border p-2">{book.id}</td>
//               <td className="border p-2">{book.student.id}</td>
//               <td className="border p-2">{book.book.id}</td>
//               <td className="border p-2">{book.borrowDate}</td>
//               <td className="border p-2">
//                 <button
//                   className="bg-red-500 text-white px-4 py-1 rounded"
//                   onClick={() => handleReturnBook(book.id)}
//                 >
//                   Return 📖
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BorrowedBooks;

{/*
import React, { useEffect, useState } from "react";
import axios from "axios";

const BorrowedBook = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchBorrowedBooks();
  }, []);

  const fetchBorrowedBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/borrowed-books`);
      //console.log("API Response:", response.data); // Debugging step
      setBorrowedBooks(response.data);
    } catch (error) {
      console.error("Error fetching borrowed books:", error);
      setMessage("Error loading borrowed books.");
    }
  };

  const handleReturn = async (borrowedBookId) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/borrowed-books/return?borrowedBookId=${borrowedBookId}`
      );
      alert("Book returned successfully!");
      setMessage(response.data);
      fetchBorrowedBooks(); // Refresh the list after returning
    } catch (error) {
      console.error("Error returning book:", error);
      setMessage("Failed to return book.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">📚 Borrowed Books</h2>

      {message && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">{message}</div>}

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 bg-white rounded shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Author</th>
              <th className="p-3">Borrowed Date</th>
              <th className="p-3">Return Date</th>
              <th className="p-3">Fine</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
  {borrowedBooks.length > 0 ? (
    borrowedBooks.map((borrowedBook) => (
      <tr key={borrowedBook.id} className="border-b hover:bg-gray-100">
        <td className="p-3">{borrowedBook.book ? borrowedBook.book.title : "N/A"}</td>
        <td className="p-3">{borrowedBook.book ? borrowedBook.book.author : "Unknown"}</td>
        <td className="p-3">
          {borrowedBook.borrowedDate
            ? new Date(borrowedBook.borrowedDate).toLocaleDateString()
            : "N/A"}
        </td>
        <td className="p-3">
          {borrowedBook.returnDate
            ? new Date(borrowedBook.returnDate).toLocaleDateString()
            : "Not Returned"}
        </td>
        <td className="p-3">{borrowedBook.fine !== undefined ? borrowedBook.fine : "0"}</td>
        <td className="p-3 text-center">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => handleReturn(borrowedBook.id)}
          >
            🔄 Return
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6" className="p-3 text-center text-gray-500">
        No borrowed books.
      </td>
    </tr>
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default BorrowedBook;
*/}

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const BorrowedBooks = ({ id }) => {
//   const [borrowedBooks, setBorrowedBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (id) {
//       fetchBorrowedBooks();
//     }
//   }, [id]);

//   const fetchBorrowedBooks = async () => {
//     try {
//       if (!id) return;
//       console.log(`Fetching data from: http://localhost:8080/api/borrowed-books/${3}`);

//       const response = await axios.get(`http://localhost:8080/api/borrowed-books/${3}`);
//       setBorrowedBooks(response.data);
//       console.log("Borrowed books:", response.data);
//     } catch (error) {
//       console.error("Error fetching borrowed books:", error);
//       setError("Failed to load borrowed books.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReturn = async (bookId) => {
//     try {
//       console.log(`Returning book with ID: ${bookId} for user: ${id}`);

//       const response = await axios.post(`http://localhost:8080/api/return-book/${id}/${bookId}`);
//       alert(response.data);
//       fetchBorrowedBooks();
//     } catch (error) {
//       console.error("Error returning book:", error);
//       alert("Failed to return the book.");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-3xl font-bold text-blue-700 mb-4">📚 Borrowed Books</h2>

//       {loading && <p className="text-center text-gray-600">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300 bg-white rounded shadow-lg">
//           <thead className="bg-blue-500 text-white">
//             <tr>
//               <th className="p-3 border">Title</th>
//               <th className="p-3 border">Author</th>
//               <th className="p-3 border">Borrowed Date</th>
//               <th className="p-3 border">Return</th>
//             </tr>
//           </thead>
//           <tbody>
//             {borrowedBooks?.length > 0 ? (
//               borrowedBooks.map((book) => (
//                 <tr key={book.id} className="border-b hover:bg-gray-100">
//                   <td className="p-3 border">{book.book?.title || "Unknown"}</td>
//                   <td className="p-3 border">{book.book?.author || "Unknown"}</td>
//                   <td className="p-3 border">
//                     {book.borrowedDate ? new Date(book.borrowedDate).toLocaleDateString() : "N/A"}
//                   </td>
//                   <td className="p-3 border">
//                     <button
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       onClick={() => handleReturn(book.id)}
//                     >
//                       🔄 Return
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="p-3 text-center text-gray-500">No borrowed books found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BorrowedBooks;



{/*}
import React, { useEffect, useState } from "react";
import axios from "axios";

const BorrowedBook = ({ userId }) => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/borrowed-books/${6}`);
        setBorrowedBooks(response.data);
        console.log("Borrowed books:", response.data);
      } catch {
        setError("Failed to fetch borrowed books");
      } finally {
        setLoading(false);
      }
    };

    fetchBorrowedBooks();
  }, [userId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Borrowed Books</h2>

      {loading && <p className="text-blue-500">Loading books...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {borrowedBooks.length === 0 && !loading && !error && (
        <p className="text-gray-500">No borrowed books found.</p>
      )}

      {borrowedBooks.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Book Name</th>
                <th className="px-4 py-2">Borrowed Date</th>
              </tr>
            </thead>
            <tbody>
              {borrowedBooks.map((book) => (
                <tr key={book.id} className="border-t">
                  <td className="px-4 py-2">{book.book.title}</td>
                  <td className="px-4 py-2">{new Date(book.borrowedDate).toDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BorrowedBook;
*/}

{/*

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../lbcomponents/UserContext";

const BorrowedBook = () => {
  const { userId } = useUser();
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) {
      setError("User ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    const fetchBorrowedBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/borrowed-books/${userId}`);
        setBorrowedBooks(response.data);
      } catch {
        setError("Failed to fetch borrowed books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBorrowedBooks();
  }, [userId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📚 Borrowed Books</h2>

      {loading && <p className="text-blue-500">Loading books...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {borrowedBooks.length === 0 && !loading && !error && (
        <p className="text-gray-500">No borrowed books found.</p>
      )}

      {borrowedBooks.length > 0 && (
        <table className="w-full border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Book Name</th>
              <th className="px-4 py-2">Borrowed Date</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((book) => (
              <tr key={book.id} className="border-t">
                <td className="px-4 py-2">{book.book.title}</td>
                <td className="px-4 py-2">{new Date(book.borrowedDate).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BorrowedBook;
*/}

// This is the final code
{/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../lbcomponents/UserContext";

const BorrowedBook = () => {
  const { userId } = useUser();
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) {
      setError("User ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    const fetchBorrowedBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/borrowed-books/${userId}`);
        setBorrowedBooks(response.data);
      } catch {
        setError("Failed to fetch borrowed books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBorrowedBooks();
  }, [userId]);

  // Handle Book Return
  const handleReturnBook = async (borrowId) => {
    try {
      await axios.put(`http://localhost:8080/api/return-book/${borrowId}`);
      alert("Book returned successfully!");
      setBorrowedBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === borrowId ? { ...book, returnedDate: new Date().toISOString() } : book
        )
      );
    } catch {
      alert("Failed to return book.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">📚 Borrowed Books</h2>

      {loading && <p className="text-blue-500">Loading books...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {borrowedBooks.length === 0 && !loading && !error && (
        <p className="text-gray-500">No borrowed books found.</p>
      )}

      {borrowedBooks.length > 0 && (
        <table className="w-full border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Borrowed Date</th>
              <th className="px-4 py-2">Returned Date</th>
              <th className="px-4 py-2">Fine</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {borrowedBooks.map((book) => (
              <tr key={book.id} className="border-t">
                <td className="px-4 py-2">{book.user.name || "Unknown"}</td>
                <td className="px-4 py-2">{book.book?.title || "Unknown"}</td>
                <td className="px-4 py-2">{new Date(book.borrowedDate).toDateString()}</td>
                <td className="px-4 py-2">{book.returnedDate ? new Date(book.returnedDate).toDateString() : "—"}</td>
                <td className="px-4 py-2">{book.fine}</td>
                <td className="px-4 py-2">
                  <button
                    className={`px-3 py-1 rounded-md ${
                      book.fine > 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-700 text-white"
                    }`}
                    onClick={() => handleReturnBook(book.id)}
                    disabled={book.fine > 0}
                  >
                    Return
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BorrowedBook;
*/}


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../lbcomponents/UserContext";

const BorrowedBook = () => {
  const { userId } = useUser();
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) {
      setError("User ID not found. Please log in again.");
      setLoading(false);
      return;
    }

    const fetchBorrowedBooks = async () => {
      try {
        const response = await axios.get(`https://lms-backend-production-0f0a.up.railway.app/api/borrowed-books/${userId}`);
        setBorrowedBooks(response.data);
      } catch {
        setError("Failed to fetch borrowed books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBorrowedBooks();
  }, [userId]);

  // Handle Book Return
  const handleReturnBook = async (borrowId) => {
    try {
      await axios.put(`https://lms-backend-production-0f0a.up.railway.app/api/return-book/${borrowId}`);
      alert("Book returned successfully!");
      setBorrowedBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === borrowId ? { ...book, returnedDate: new Date().toISOString() } : book
        )
      );
    } catch {
      alert("Failed to return book.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">📚 Borrowed Books</h2>

      {loading && <p className="text-blue-500 text-center">Loading books...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {borrowedBooks.length === 0 && !loading && !error && (
        <p className="text-gray-500 text-center">No borrowed books found.</p>
      )}

      {borrowedBooks.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 shadow-lg rounded-lg bg-white">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Borrowed Date</th>
                <th className="px-6 py-3 text-left">Returned Date</th>
                <th className="px-6 py-3 text-left">Fine</th>
              
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {borrowedBooks.map((book) => (
                <tr key={book.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4">{book.user.name || "Unknown"}</td>
                  <td className="px-6 py-4">{book.book?.title || "Unknown"}</td>
                  <td className="px-6 py-4">{new Date(book.borrowedDate).toDateString()}</td>
                  <td className="px-6 py-4">{book.returnedDate ? new Date(book.returnedDate).toDateString() : "—"}</td>
                  <td className="px-6 py-4">{book.fine}</td>
                  
                  <td className="px-6 py-4 text-center">
                    <button
                      className={`px-4 py-2 rounded-md font-semibold text-white shadow-md transition-all 
                        ${book.fine > 0 ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}
                      onClick={() => handleReturnBook(book.id)}
                      disabled={book.fine > 0}
                    >
                      Return
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BorrowedBook;


