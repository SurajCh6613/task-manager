import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()
  const handleLogout = async () => {
    try {
     const res =  await axios({
        method: "post",
        url: `http://localhost:3000/user/logout`,
        withCredentials: true,
      });
      console.log("logout successfully",res.data);
      navigate("/")
    } catch (error) {
        console.log("Logout",error);
        
    }
  };
  return (
    <div className="w-full p-8">
      <div className="p-8 rounded-md shadow-md flex justify-between">
        <div>
          <h3 className="text-3xl font-semibold mb-4">Welcome, Suraj</h3>
          <button className="btn mb-4">Edit Profile</button>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="p-2 rounded-md text-white font-bold bg-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
