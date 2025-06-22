import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Logout from "../components/Logout";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="w-full p-8 pt-20">
      <div className="p-8 rounded-md shadow-md flex justify-between">
        <div>
          <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold mb-4">Welcome, {user.name}</h3>
          <p className="mb-4 text-gray-500">Email: {user.email}</p>
          <Link className="btn mb-4" to={`/user/edit/${user._id}`}>
            Update Profile
          </Link>
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
