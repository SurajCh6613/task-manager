import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Logout from "../components/Logout";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="w-full p-8">
      <div className="p-8 rounded-md shadow-md flex justify-between">
        <div>
          <h3 className="text-3xl font-semibold mb-4">Welcome, {user.name}</h3>
          <p className="mb-4 text-gray-500">Email: {user.email}</p>
          <button className="btn mb-4">Edit Profile</button>
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
