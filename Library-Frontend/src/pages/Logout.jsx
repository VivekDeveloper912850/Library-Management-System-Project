import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Clear token from local storage
    navigate("/admin"); // Redirect to login page
  };

  return (
    <button 
      onClick={handleLogout} 
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      🚪 Logout
    </button>
  );
};

export default Logout;