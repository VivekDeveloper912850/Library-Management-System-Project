import { useState } from "react";
import UserSidebar from "./UserSidebar";
import SearchBooks from "./SearchBooks";
import BorrowedBooks from "./BorrowedBooks";
import ReturnedBooks from "./ReturnedBooks";
import Profile from "./Profile";



const UserDashboard = () => {
    const [activeTab, setActiveTab] = useState("search");

    
  
    return (
       <div className="flex">
         <UserSidebar setActiveTab={setActiveTab} />
         <div className="p-6 ml-64 w-full">
           <h1 className="text-2xl font-bold mb-4">📊 User Dashboard</h1>
  
           {activeTab === "search" && <SearchBooks />}
            {activeTab === "borrowed" && <BorrowedBooks />} 
            {activeTab === "returned" && <ReturnedBooks />}
            {activeTab === "profile" && <Profile />}
             
            

          


        </div>
      </div>

    

    );
  };
  
  export default UserDashboard;