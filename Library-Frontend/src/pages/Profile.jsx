
{/*}

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../lbcomponents/UserContext";

const Profile = () => {
  const { userId } = useUser();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profilePhoto: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) {
      setError("User not logged in.");
      setLoading(false);
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
        setUser(response.data);
      } catch {
        setError("Failed to fetch profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
      <div className="text-center p-6 border-b">
        <img 
          className="w-24 h-24 rounded-full mx-auto" 
          src={user.profilePhoto || "https://via.placeholder.com/150"} 
          alt="User Profile" 
        />
        <h2 className="text-xl font-semibold mt-2">{user.name || "No Name"}</h2>
        <p className="text-gray-600">{user.email || "No Email"}</p>
        <p className="text-gray-600">{user.phone || "No Phone"}</p>
      </div>
      {loading && <p className="text-blue-500 text-center p-4">Loading...</p>}
      {error && <p className="text-red-500 text-center p-4">{error}</p>}
    </div>
  );
};

export default Profile;
*/}


// this is the final  code for the profile page
{/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../lbcomponents/UserContext";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const { userId } = useUser();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profilePhoto: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!userId) {
      setError("User not logged in.");
      setLoading(false);
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/user/${userId}`);
        setUser(response.data);
        setPreview(response.data.profilePhoto || "");
      } catch (err) {
        setError("Failed to fetch profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image first!");

    const formData = new FormData();
    formData.append("profilePhoto", image);

    try {
      const response = await axios.post(`http://localhost:8080/api/user/${userId}/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Profile picture updated successfully!");
      setPreview(response.data.profilePhoto);
    } catch (err) {
      alert("Failed to upload image.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">User Profile</h2>
      <div className="flex flex-col items-center">
        {preview ? (
          <img src={preview} alt="Profile" className="w-24 h-24 rounded-full shadow-md border" />
        ) : (
          <FaUserCircle className="text-gray-400 w-24 h-24" />
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} className="mt-3" />
        <button onClick={handleUpload} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Upload Image
        </button>
      </div>
      {loading ? (
        <p className="text-blue-500 text-center mt-4">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center mt-4">{error}</p>
      ) : (
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold">{user.name || "No Name"}</h3>
          <p className="text-gray-600">{user.email || "No Email"}</p>
          <p className="text-gray-600">{user.phone || "No Phone"}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
*/}


import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "", phone: "" });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    // Fetch user data from backend
    axios.get("https://lms-backend-production-0f0a.up.railway.app/api/user-id")
      .then(response => {
        axios.get(`https://lms-backend-production-0f0a.up.railway.app/api/user/${response.data}`)
          .then(res => setUser(res.data))
          .catch(err => console.error("User fetch error:", err));
      })
      .catch(err => console.error("User ID fetch error:", err));
  }, []);

  // Handle Image Selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("Please select an image first!");
      return;
    }
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        
        
        <div className="relative">
          {preview ? (
            <img src={preview} alt="Profile" className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500" />
          ) : (
            <FaUserCircle className="text-gray-400 w-32 h-32 mx-auto" />
          )}
          
          
          <input 
            type="file"
            accept="image/*"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-0 w-32"
            onChange={handleImageChange}
          />
        </div>

         
        <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.phone}</p>

        
        <label className="mt-4 block cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Select Image
          <input 
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </div>
  );
};

export default Profile;



//this is the final code for the profile page


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaUserCircle } from "react-icons/fa";

// const Profile = () => {
//   const [user, setUser] = useState({ name: "", email: "", phone: "", profileImage: "" });
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     // Fetch user details from backend
//     axios.get("http://localhost:8080/api/user-profile")
//       .then(response => {
//         setUser(response.data);
//         if (response.data.profileImage) {
//           setPreview(`http://localhost:8080/uploads/${response.data.profileImage}`);
//         }
//       })
//       .catch(err => console.error("User fetch error:", err));
//   }, []);

//   // Handle Image Selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) {
//       alert("Please select an image!");
//       return;
//     }
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   // Handle Image Upload
//   const handleUpload = () => {
//     if (!image) {
//       alert("Please select an image before uploading.");
//       return;
//     }
    
//     const formData = new FormData();
//     formData.append("profileImage", image);
    
//     axios.post("http://localhost:8080/api/upload-image", formData, {
//       headers: { "Content-Type": "multipart/form-data" }
//     })
//     .then(response => {
//       alert("Image uploaded successfully!");
//       setUser({ ...user, profileImage: response.data.filename });
//       setPreview(`http://localhost:8080/uploads/${response.data.filename}`);
//     })
//     .catch(err => console.error("Image upload error:", err));
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        
//         {/* Profile Image */}
//         <div className="relative">
//           {preview ? (
//             <img src={preview} alt="Profile" className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500" />
//           ) : (
//             <FaUserCircle className="text-gray-400 w-32 h-32 mx-auto" />
//           )}
          
//           {/* File Input */}
//           <input 
//             type="file"
//             accept="image/*"
//             className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-0 w-32"
//             onChange={handleImageChange}
//           />
//         </div>

//         {/* User Details */}
//         <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
//         <p className="text-gray-600">{user.email}</p>
//         <p className="text-gray-600">{user.phone}</p>

//         {/* Upload Button */}
//         <button 
//           className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//           onClick={handleUpload}
//         >
//           Upload Image
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaUserCircle } from "react-icons/fa";

// const Profile = () => {
//   const [user, setUser] = useState({ name: "", email: "", phone: "", profileImage: "" });
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   useEffect(() => {
//     // Fetch user details and profile image from backend
//     axios.get("http://localhost:8080/api/user-profile")
//       .then(response => {
//         setUser(response.data);
//         if (response.data.profileImage) {
//           setPreview(`http://localhost:8080/uploads/${response.data.profileImage}`);
//         }
//       })
//       .catch(err => console.error("User fetch error:", err));
//   }, []);

//   // Handle Image Selection
//   const handleImageChange = (e) => {
//     console.log("File input event triggered");

//     const file = e.target.files[0];

//     if (!file) {
//       alert("Please select an image!");
//       console.log("No file selected");
//       return;
//     }

//     console.log("Selected file:", file);
//     setImage(file);
//     setPreview(URL.createObjectURL(file)); // Show preview of selected image

//     // Verify if state updates correctly
//     setTimeout(() => {
//       console.log("Updated image state:", image);
//     }, 500);
//   };

//   // Handle Image Upload
//   const handleUpload = async () => {
//     if (!image) {
//       alert("Please select an image before uploading.");
//       console.log("Image state is null:", image);
//       return;
//     }

//     console.log("Uploading image:", image);

//     const formData = new FormData();
//     formData.append("profileImage", image);

//     try {
//       const response = await axios.post("http://localhost:8080/api/upload-image", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("Image uploaded successfully!");
//       const uploadedFileName = response.data.filename;
//       setUser({ ...user, profileImage: uploadedFileName });
//       setPreview(`http://localhost:8080/uploads/${uploadedFileName}`);
//       setImage(null); // Reset image state after upload
//     } catch (error) {
//       console.error("Image upload error:", error);
//       alert("Image upload failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        
//         {/* Profile Image */}
//         <div className="relative">
//           {preview ? (
//             <img src={preview} alt="Profile" className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-500" />
//           ) : (
//             <FaUserCircle className="text-gray-400 w-32 h-32 mx-auto" />
//           )}

//           {/* File Input */}
//           <input 
//             type="file"
//             accept="image/*"
//             className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-0 w-32"
//             onChange={handleImageChange}
//           />
//         </div>

//         {/* User Details */}
//         <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
//         <p className="text-gray-600">{user.email}</p>
//         <p className="text-gray-600">{user.phone}</p>

//         {/* Upload Button */}
//         <button 
//           className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//           onClick={handleUpload}
//         >
//           Upload Image
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;
