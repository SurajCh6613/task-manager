import { useNavigate } from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";
import BACKEND_API from "../../config";
import toast from "react-hot-toast";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { user, setUser, loading, setLoading } = useAuth();

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      toast.error("All fields are required");
      return;
    }
    const endpoint = isLogin ? "login" : "register";
    setLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: `${BACKEND_API}/user/${endpoint}`,
        data: formData,
        withCredentials: true,
      });

      const userRes = await axios.get(`${BACKEND_API}/user/me`, {
        withCredentials: true,
      });
      setUser(userRes.data);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "" });
  };


  useEffect(() => {
    if (user && !loading) {
      navigate("/dashboard");
    }
  }, [user]);
  return (
    <>
      <section className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex justify-center items-center p-4 md:p-8 pt-16">
        <div className="bg-white py-6 md:py-12 px-3 md:px-6 rounded-md shadow-md">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-8">
            Welcome to Task Manager
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            {!isLogin && (
              <div className="flex flex-col">
                <label className="py-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Fullname"
                  className="input"
                  onChange={handleOnChange}
                  autoComplete="full-name"
                  value={formData.name}
                  required
                />
              </div>
            )}
            <div className="flex flex-col">
              <label className="py-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="input"
                onChange={handleOnChange}
                value={formData.email}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className=" py-1">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                onChange={handleOnChange}
                autoComplete="password"
                value={formData.password}
                required
                placeholder="******"
              />
            </div>
            <button type="submit" className="btn w-full" disabled={loading}>
              {loading ? "Processing..." : isLogin ? "Login" : "Register"}
            </button>
            <div className="text-center md:text-xl">
              <p>
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-blue-500 cursor-pointer"
                >
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
