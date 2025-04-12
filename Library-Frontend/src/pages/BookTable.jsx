// import axios from "axios";

// const BookTable = ({ books, fetchBooks }) => {
//   const approveBook = async (bookId) => {
//     await axios.put(`http://localhost:8080/api/admins/approve/${bookId}`);
//     fetchBooks();
//   };

//   const rejectBook = async (bookId) => {
//     await axios.put(`http://localhost:8080/api/admins/reject/${bookId}`);
//     fetchBooks();
//   };

//   const deleteBook = async (bookId) => {
//     await axios.delete(`http://localhost:8080/api/admins/delete/${bookId}`);
//     fetchBooks();
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg">
//       <h2 className="text-xl font-bold mb-4">📚 Book Requests</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Title</th>
//             <th className="border p-2">Author</th>
//             <th className="border p-2">Status</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {books.map((book) => (
//             <tr key={book.id} className="text-center">
//               <td className="border p-2">{book.title}</td>
//               <td className="border p-2">{book.author}</td>
//               <td className="border p-2">{book.status}</td>
//               <td className="border p-2 space-x-2">
//                 {book.status === "Pending" && (
//                   <>
//                     <button 
//                       onClick={() => approveBook(book.id)} 
//                       className="bg-green-500 text-white px-3 py-1 rounded"
//                     >
//                       ✅ Approve
//                     </button>
//                     <button 
//                       onClick={() => rejectBook(book.id)} 
//                       className="bg-red-500 text-white px-3 py-1 rounded"
//                     >
//                       ❌ Reject
//                     </button>
//                   </>
//                 )}
//                 <button 
//                   onClick={() => deleteBook(book.id)} 
//                   className="bg-gray-500 text-white px-3 py-1 rounded"
//                 >
//                   🗑 Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookTable;



import axios from "axios";

const BooksTable = ({ books, fetchBooks }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/admins/delete/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/admins/approve/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error approving book:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/admins/reject/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error rejecting book:", error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">📖 Books List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">📖 Title</th>
            <th className="border border-gray-300 px-4 py-2">✍️ Author</th>
            <th className="border border-gray-300 px-4 py-2">📘 ISBN</th>
            <th className="border border-gray-300 px-4 py-2">📂 Category</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">⚙️ Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 ? (
            books.map((book, index) => (
              <tr key={book.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">{book.title}</td>
                <td className="border border-gray-300 px-4 py-2">{book.author}</td>
                <td className="border border-gray-300 px-4 py-2">{book.isbn}</td>
                <td className="border border-gray-300 px-4 py-2">{book.category}</td>
                <td className="border border-gray-300 px-4 py-2">{book.quantity}</td>
                <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                {book.status === "Pending" && (
                  <>
                    <button onClick={() => handleApprove(book.id)} className="bg-green-500 text-white px-2 py-1 rounded">
                      ✅ Approve
                    </button>
                    <button onClick={() => handleReject(book.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                      ❌ Reject
                    </button>
                  </>
                )}
                  <button onClick={() => handleDelete(book.id)} className="bg-gray-500 text-white px-2 py-1 rounded">
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="border border-gray-300 px-4 py-2 text-center">
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
