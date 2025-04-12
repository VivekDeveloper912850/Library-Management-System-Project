// import { NavLink } from "react-router-dom";



// const Sidebar = ({ setActiveTab }) => {
  

//   return (
//     <div>
//       <div className="h-screen w-64 bg-gray-900 text-white p-4 fixed">
//         <h2 className="text-2xl font-bold text-center mb-6">Library Admin</h2>
//         <ul className="space-y-4">
//           <li>
//             <NavLink 
//               to="/admin/dashboard" 
//               className="block px-4 py-2 rounded hover:bg-gray-700"
//             >
//               📊 Dashboard
//             </NavLink>
//           </li>
//           <li>
//             <NavLink 
//               to="/admin/add-book" 
//               className="block px-4 py-2 rounded hover:bg-gray-700"
//             >
//               ➕ Add Book
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="w-64 h-screen bg-gray-800 text-white fixed p-5">
//         <h2 className="text-2xl font-bold mb-6">📚 Admin Panel</h2>

//         <button
//           onClick={() => setActiveTab("users")}
//           className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
//         >
//           👥 Users
//         </button>

//         <button
//           onClick={() => setActiveTab("books")}
//           className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//         >
//           📖 Books
//         </button>
//          <div>
//         <button
//         onClick={() => setActiveTab("addBook")}
//         className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
//       >
//         ➕ Add Book
//       </button>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { useNavigate } from "react-router-dom";

const Sidebar = ({ setActiveTab }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Remove token
    navigate("/admin"); // Redirect to login
  };
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed p-5">
      <h2 className="text-2xl font-bold mb-6">📚 Admin Panel</h2>

      <button
        onClick={() => setActiveTab("users")}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-20"
      >
        👥 Users
      </button>

      <button
        onClick={() => setActiveTab("books")}
        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-20"
      >
        📖 Books
      </button>

      <button
        onClick={() => setActiveTab("addBook")}
        className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-20"
      >
        ➕ Add Book
      </button>

      <button
        onClick={() => setActiveTab("IssueBook")}
        className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4  rounded mb-20"
      >
         Issue Book
      </button>

      <button
        onClick={() => setActiveTab("ReturnedBooks")}
        className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4  rounded mb-20"
      >
         Returned Books
      </button>
      
      <button
        onClick={handleLogout}
        className="block bg-red-500 w-full py-2 px-4 rounded text-center"
      >
        🚪 Logout
      </button>
    </div>
  );
};

export default Sidebar;