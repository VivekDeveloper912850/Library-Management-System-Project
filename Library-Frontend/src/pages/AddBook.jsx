// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AddBook = () => {
//   const [book, setBook] = useState({ title: "", author: "", status: "Pending" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:8080/api/admins/add", book);
//     alert("Book Added Successfully!");
//     navigate("/admin/dashboard");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-200">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center">Add New Book</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" name="title" placeholder="Book Title" className="w-full p-2 border rounded" onChange={handleChange} required />
//           <input type="text" name="author" placeholder="Author Name" className="w-full p-2 border rounded" onChange={handleChange} required />
//           <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Add Book</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBook;


// Another code here!!!

// import { useState } from "react";
// import axios from "axios";

// const AddBook = () => {
//   const [book, setBook] = useState({
//     title: "",
//     author: "",
//     isbn: "",
//     category: "",
//   });

//   const handleChange = (e) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8080/api/admin/books", book);
//       alert("Book added successfully!");
//     } catch (error) {
//       console.error("Error adding book:", error);
//     }
//   };

//   return (
//     <div className="p-6 ml-64 w-full">
//       <h2 className="text-2xl font-bold mb-4">➕ Add a New Book</h2>
//       <form onSubmit={handleSubmit} className="bg-white p-4 shadow-lg rounded">
//         <input name="title" placeholder="Title" onChange={handleChange} className="block w-full p-2 border rounded mb-2" />
//         <input name="author" placeholder="Author" onChange={handleChange} className="block w-full p-2 border rounded mb-2" />
//         <input name="isbn" placeholder="ISBN" onChange={handleChange} className="block w-full p-2 border rounded mb-2" />
//         <input name="category" placeholder="Category" onChange={handleChange} className="block w-full p-2 border rounded mb-2" />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddBook;

{/*}
import { useState } from "react";
import axios from "axios";

const AddBook = ({ fetchBooks }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!book.title || !book.author || !book.isbn || !book.category) {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/admins/add", book);
      alert("Book added successfully!");
      setBook({ title: "", author: "", isbn: "", category: "" });
      fetchBooks(); // Refresh books list
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold mb-4">➕ Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="📖 Book Title"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="✍️ Author Name"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          placeholder="📘 ISBN Number"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="category"
          value={book.category}
          onChange={handleChange}
          placeholder="📂 Category"
          className="w-full border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          ➕ Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
*/}

{/*
import { useState } from "react";
import axios from "axios";

const AddBook = ({ fetchBooks }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!book.title || !book.author || !book.isbn || !book.category) {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/admins/add", book);
      alert("Book added successfully!");
      setBook({ title: "", author: "", isbn: "", category: "" });
      fetchBooks(); // Refresh books list
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book.");
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg mx-auto border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">📚 Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="📖 Book Title"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="✍️ Author Name"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          placeholder="📘 ISBN Number"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="category"
          value={book.category}
          onChange={handleChange}
          placeholder="📂 Category"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300">
          ➕ Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
*/}


import { useState } from "react";
import axios from "axios";

const AddBook = ({ fetchBooks }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    quantity: "", // New field added
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!book.title || !book.author || !book.isbn || !book.category || !book.quantity) {
      alert("All fields are required!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/admins/add", book);
      alert("Book added successfully!");
      setBook({ title: "", author: "", isbn: "", category: "", quantity: "" }); // Reset all fields
      fetchBooks(); // Refresh books list
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book.");
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 max-w-lg mx-auto border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">📚 Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
          placeholder="📖 Book Title"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
          placeholder="✍️ Author Name"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          placeholder="📘 ISBN Number"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="category"
          value={book.category}
          onChange={handleChange}
          placeholder="📂 Category"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="number"
          name="quantity"
          value={book.quantity}
          onChange={handleChange}
          placeholder="🔢 Quantity"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          min="1"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300">
          ➕ Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
