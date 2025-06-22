import { useNavigate } from "react-router-dom";
import "../index.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
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
    const endpoint = isLogin ? "login" : "register";
    try {
      const res = await axios({
        method: "post",
        url: `http://localhost:3000/user/${endpoint}`,
        data: formData,
        withCredentials: true,
      });

      const userRes = await axios.get(`http://localhost:3000/user/me`, {
        withCredentials: true,
      });
      setUser(userRes.data);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      setError(error.response?.data.message || "Something went wrong");
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
      <section className="h-full w-full flex justify-center items-center p-8">
        <form
          onSubmit={handleLogin}
          className="bg-gray-100 w-1/3 text-center rounded-md shadow-lg flex flex-col space-y-6 py-8 justify-center items-center"
        >
          <h2 className="text-2xl font-semibold">
            {isLogin ? "Login" : "Register"}
          </h2>
          {!isLogin && (
            <div className="flex">
              <label className="py-3 w-20">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Fullname"
                className="input"
                onChange={handleOnChange}
                autoComplete="full-name"
              />
            </div>
          )}
          <div className="flex ">
            <label className="py-3 w-20">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="input"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex">
            <label className=" py-3 w-20">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              onChange={handleOnChange}
              autoComplete="password"
            />
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Processing..." : isLogin ? "Login" : "Register"}
          </button>
          <div>
            <div>{error && <p className="mb-4 text-red-500">{error}</p>}</div>
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
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
      </section>
    </>
  );
};

export default Login;
