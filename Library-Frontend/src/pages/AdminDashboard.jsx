
//     import { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar";
// import BooksTable from "./BookTable";
// import AddBook from "./AddBook";

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState("");
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     if (activeTab === "books") {
//       fetchBooks();
//     }
//   }, [activeTab]);

//   useEffect(() => {
//     if (activeTab === "addBook") {
//       addBooks();
//     }
//   }, [activeTab]);

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/api/admin/books");
//       setBooks(response.data);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//     }
//   };
//   // Adding the books
//   const addBooks = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/api/admin/books");
//       setBooks(response.data);
//     } catch (error) {
//       console.error("Error adding books:", error);
//     }
//   }

//   return (
//     <div className="flex">
//       <Sidebar setActiveTab={setActiveTab} />
//       <div className="p-6 ml-64 w-full">
//         <h1 className="text-2xl font-bold mb-4">📊 Admin Dashboard</h1>

//         {activeTab === "books" && <BooksTable books={books} addBooks={addBooks} />}
//         {activeTab === "addBook" && <AddBook addBooks={addBooks} />}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import BooksTable from "./BookTable";
import AddBook from "./AddBook";
import UsersTable from "./UsersTable";
import IssuedBooksTable from "./IssuedBooksTable";
import ReturnedBooksTable from "./ReturnedBooksTable";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (activeTab === "books") {
      fetchBooks();
    }
  }, [activeTab]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("https://lms-backend-production-0f0a.up.railway.app/api/admins/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="p-6 ml-64 w-full">
        <h1 className="text-2xl font-bold mb-4">📊 Admin Dashboard</h1>

        {activeTab === "books" && (
          <>
            <BooksTable books={books} fetchBooks={fetchBooks} />
          </>
        )}
        {activeTab === "addBook" && (
          <>
            <AddBook fetchBooks={fetchBooks} />
          </>
        )}
        {activeTab === "users" && (
          <>
            <UsersTable />
          </>
        )}

        {activeTab === "IssueBook" && (
          <>
            <IssuedBooksTable/>
          </>
        )}


        {activeTab === "ReturnedBooks" && (
          <>
            <ReturnedBooksTable/>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

