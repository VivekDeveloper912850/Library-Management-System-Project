

import { useState, useEffect } from "react";
import axios from "axios";

const ReturnedBooksTable = () => {
  const [returnedBooks, setReturnedBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/returned-books")
      .then(response => setReturnedBooks(response.data))
      .catch(error => console.error("Error fetching returned books:", error));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">📚 Returned Books</h2>
      
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">User</th>
            <th className="border p-2">Phone No</th>
            <th className="border p-2">Book Title</th>
            <th className="border p-2">Return Date</th>
            <th className="border p-2">Fine Amount</th>
          </tr>
        </thead>
        <tbody>
          {returnedBooks.map((book) => (
            <tr key={book.id} className="border">
              <td className="border p-2">{book.user.name}</td>
              <td className="border p-2">{book.user.phone}</td>
              <td className="border p-2">{book.book.title}</td>
              <td className="border p-2">{new Date(book.returnDate).toDateString()}</td>
              <td className="border p-2">{book.fineAmount || "No Fine"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReturnedBooksTable;
