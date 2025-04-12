

{/*
import { useEffect, useState } from "react";
import axios from "axios";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // const deleteUser = async (id) => {
  //   if (!window.confirm("Are you sure you want to delete this user?")) return;
    
  //   try {
  //     await axios.delete(`http://localhost:8080/api/admin/users/${id}`);
  //     alert("User deleted successfully!");
  //     fetchUsers();
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //   }
  // };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">👥 User Management</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2"></th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone No</th>
           
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4">No users found.</td>
            </tr>
          ) : (
            users.map((user) => (
                <tr key={user.id} className="text-center">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phone}</td>
               {/* <td className="border px-4 py-2">
                   <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    ❌ Delete
                  </button> 
                </td> 
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
*/}

{/*
import { useEffect, useState } from "react";
import axios from "axios";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [passwords, setPasswords] = useState({}); // Store revealed passwords

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleShowPassword = async (userId) => {
    const adminPassword = prompt("Enter Admin Password:");

    if (!adminPassword) {
      alert("Admin password is required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/admin/verify-password", {
        adminPassword,
        userId,
      });

      if (response.data.success) {
        setPasswords((prev) => ({ ...prev, [userId]: response.data.userPassword }));
      } else {
        alert("Invalid Admin Password!");
      }
    } catch (error) {
      console.error("Error verifying admin password:", error);
      alert("Error verifying password.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">👥 User Management</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone No</th>
            <th className="border px-4 py-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4">No users found.</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2">
                  {passwords[user.id] ? (
                    passwords[user.id]
                  ) : (
                    <button
                      onClick={() => handleShowPassword(user.id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      🔑 Show Password
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
*/}


import { useEffect, useState } from "react";
import axios from "axios";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [passwords, setPasswords] = useState({}); // Store revealed passwords
  const ADMIN_PIN = "100036"; // Hardcoded admin PIN

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleShowPassword = (userId, userPassword) => {
    const enteredPin = prompt("Enter Admin PIN:");

    if (enteredPin === ADMIN_PIN) {
      setPasswords((prev) => ({ ...prev, [userId]: userPassword }));
    } else {
      alert("❌ Please enter the correct PIN!");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">👥 User Management</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone No</th>
            <th className="border px-4 py-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4">No users found.</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2">
                  {passwords[user.id] ? (
                    passwords[user.id]
                  ) : (
                    <button
                      onClick={() => handleShowPassword(user.id, user.password)}
                      className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                      🔑 Show Password
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
