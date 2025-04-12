import { useNavigate } from "react-router-dom";

const UserSidebar = ({ setActiveTab }) => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role"); // Remove user role
    localStorage.removeItem("token"); // Remove authentication token
    navigate("/login"); // Redirect to Login page
  };
    return (
      <div className="w-64 h-screen bg-gray-800 text-white p-6 fixed">
        <h2 className="text-2xl font-bold mb-6">📚 User Panel</h2>

        <button
          onClick={() => setActiveTab("profile")}
          className="block bg-blue-500 w-full py-2 my-20 rounded text-center">
         👤 Profile</button>
        <button
          onClick={() => setActiveTab("search")}
          className="block bg-blue-500 w-full py-2 my-20 rounded text-center">
         🔍 Search</button>
        <button
          onClick={() => setActiveTab("borrowed")}
          className="block bg-green-500 w-full py-2 my-20 rounded text-center"
        >
          📖 Borrowed Books
        </button>
        <button
          onClick={() => setActiveTab("returned")}
          className="block bg-yellow-500 w-full py-2 my-20 rounded text-center"
        >
          📜 Returned Books
        </button>


        <button
          onClick={handleLogout}
          className="block bg-yellow-500 w-full py-2 my-20 rounded text-center"
        >
          Logout
        </button>
      </div>
    );
  };
  
  export default UserSidebar;
  