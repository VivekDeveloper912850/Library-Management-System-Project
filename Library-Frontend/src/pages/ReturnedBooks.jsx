


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../lbcomponents/UserContext";

const ReturnedBook = () => {
  const { userId } = useUser();
  const [returnedBooks, setReturnedBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReturnedBooks = async () => {
      try {
        const returnedResponse = await axios.get(`http://localhost:8080/api/returned-books/${userId}`);
        setReturnedBooks(returnedResponse.data);

        const borrowedResponse = await axios.get(`http://localhost:8080/api/borrowed-books/${userId}`);
        const borrowedData = borrowedResponse.data;

        const borrowedMap = {};
        borrowedData.forEach((book) => {
          borrowedMap[book.book.id] = {
            borrowedDate: book.borrowedDate,
            fineAmount: book.fine,
          };
        });

        setBorrowedBooks(borrowedMap);
      } catch (error) {
        setError("Failed to fetch books data.");
      } finally {
        setLoading(false);
      }
    };

    fetchReturnedBooks();
  }, [userId]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">📚 Returned Books</h2>

      {loading && <p className="text-blue-500 text-center">Loading books...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {returnedBooks.length === 0 && !loading && !error && (
        <p className="text-gray-500 text-center">No returned books found.</p>
      )}

      {returnedBooks.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 shadow-lg rounded-lg text-left">
            <thead className="bg-blue-500 text-white uppercase">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Book Name</th>
                <th className="px-6 py-3">Borrow Date</th>
                <th className="px-6 py-3">Return Date</th>
                <th className="px-6 py-3">Fine Amount</th>
              </tr>
            </thead>
            <tbody>
              {returnedBooks.map((book) => {
                const bookDetails = borrowedBooks[book.book.id] || {};
                return (
                  <tr key={book.id} className="border-t even:bg-gray-100 hover:bg-gray-200">
                    <td className="px-6 py-3">{book.user.name}</td>
                    <td className="px-6 py-3">{book.book.title}</td>
                    <td className="px-6 py-3">
                      {/* {bookDetails.borrowedDate
                        ? new Date(bookDetails.borrowedDate).toDateString()
                        : "Not Available"} */}
                        {new Date(book.borrowedDate).toDateString()}
                    </td>
                    <td className="px-6 py-3">{new Date(book.returnDate).toDateString()}</td>
                    <td className="px-6 py-3 text-red-600 font-bold">
                      {/* {bookDetails.fineAmount !== undefined ? `Rs. ${bookDetails.fineAmount}` : "Not Available"} */}
                      {book.fineAmount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReturnedBook;
