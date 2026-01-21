import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Logout from "../components/Logout";
import { useEffect } from "react";
import MyTasks from "./MyTasks";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="w-full pt-12 md:section-padding">
      <div className="p-8 shadow-md flex justify-between">
        <div>
          <h3 className="lg:text-3xl md:text-3xl text-sm font-semibold mb-4">Welcome, {user.name}</h3>
          <p className="mb-4 text-gray-500">Email: {user.email}</p>
          <Link className="btn mb-4" to={`/user/edit/${user._id}`}>
            Update
          </Link>
        </div>
        <div className="md:hidden">
          <Logout />
        </div>
      </div>
      <div className="bg-gray-100 min-h-51">
        <MyTasks />
      </div>
    </div>
  );
};

export default Dashboard;
