import axios from "axios";
import { useAuth } from "../context/authContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BACKEND_API from "../../config";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { user, loading, setLoading, setUser } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  //   useEffect to set user data in formData
  useEffect(() => {
    setFormData({
      name: user.name || "",
      email: user.email || "",
    });
  }, [user]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${BACKEND_API}/user/edit/${user._id}`,
        formData,
        {
          withCredentials: true,
        }
      );

      setUser(res.data.user);

      navigate("/dashboard");
    } catch (error) {
      console.log("Update User Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full p-8">
      <div className="p-8 rounded-md shadow-md flex justify-between">
        <div>
          <h3 className="text-3xl font-semibold mb-4">Update Profile</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-3">
              <label className="pt-3 w-20">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex gap-3">
              <label className="pt-3 w-20">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="btn mb-4">
              {loading ? "Processing..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
