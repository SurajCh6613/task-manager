import axios from "axios";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import BACKEND_API from "../../config";
import toast from "react-hot-toast";

const Logout = () => {
  const { setUser, setLoading } = useAuth();
  const navigate = useNavigate();

  /**
   * The `handleLogout` function logs out the user by making a GET request to the server, updating the
   * user state, and redirecting to the home page.
   */
  const handleLogout = async () => {
    try {
      await axios.get(`${BACKEND_API}/user/logout`, {
        withCredentials: true,
      });
      setTimeout(() => {
        setUser(false);
      }, 50);
      toast.success("Logged out successfully.");
      navigate("/");
    } catch (error) {
      toast.error(error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white font-bold rounded-md hover:bg-red-500 hover:scale-105 duration-300 px-3 py-2 bg-red-400"
    >
      Logout
    </button>
  );
};

export default Logout;
