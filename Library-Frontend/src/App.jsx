
// /
// export default App


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Register1 from "./component/Register1";
// import Login1 from "./component/Login1";


// function App() {
//   return (
//     <Router>
//       <Routes>
       
//         <Route path="/register" element={<Register1 />} />
//         <Route path="/login" element={<Login1 />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// Making real project making started

//import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Routes , useLocation } from "react-router-dom";
import Navbar from "./lbcomponents/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AddBook from "./pages/AddBook";
import UserDashboard from "./pages/UserDashboard";

// const AuthContext = createContext();

// function App() {
//   const [role, setRole] = useState(localStorage.getItem("role") || "");

//   // Function to update role when login/logout happens
//   const updateRole = (newRole) => {
//     setRole(newRole);
//     if (newRole) {
//       localStorage.setItem("role", newRole);
//     } else {
//       localStorage.removeItem("role");
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ role, updateRole }}>
//       <Router>
//         <Main />
//       </Router>
//     </AuthContext.Provider>
//   );
// }

// function Main() {
//   // Removed unused location variable
//   const { role } = useContext(AuthContext); // Get role from Context

//   // Hide Navbar for logged-in users (user/admin)
//   const showNavbar = !(role === "user" || role === "admin");

//   return (
//     <>
//       {showNavbar && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<AdminLogin />} />
//         <Route path="/user-dashboard" element={<UserDashboard />} />
//         <Route path="/admin/dashboard" element={<AdminDashboard />} />
//         <Route path="/add-book" element={<AddBook />} />
//       </Routes>
//     </>
//   );
// }



// export default App;


function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  
  // Hide Navbar for these routes
  const hideNavbarRoutes = ["/admin/dashboard", "/user-dashboard"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/add-book" element={<AddBook />} />

      </Routes>
    </>
  );
}

export default App;