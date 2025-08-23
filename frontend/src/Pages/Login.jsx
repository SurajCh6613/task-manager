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
    setLoading(true);
    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      toast.error("All fields are required");
      return;
    }
    const endpoint = isLogin ? "login" : "register";
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

  /* The `useEffect` hook in the provided code snippet is used to perform side effects in function
 components. In this specific case: */
  useEffect(() => {
    if (user && !loading) {
      navigate("/dashboard");
    }
  }, [user]);
  return (
    <>
      <section className="h-full w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex justify-center items-center p-8 pt-20">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-8">
            Welcome to Task Manager
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            {!isLogin && (
              <div className="">
                <label className="py-3">Name</label>
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
            <div>
              <label className="py-3">Email</label>
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
            <div>
              <label className=" py-3">Password</label>
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
            <div className="text-center">
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
