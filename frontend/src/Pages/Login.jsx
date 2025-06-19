import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "login" : "register";
    try {
      const res = await axios({
        method: "post",
        url: `http://localhost:3000/user/${endpoint}`,
        data: formData,
        withCredentials: true,
      });
      console.log(`${isLogin ? "Login" : "Register"} Successful`, res.data);
      navigate("/dashboard")
    } catch (error) {
      console.log(
        `${isLogin ? "Login" : "Register"} Error`,
        error.response?.data || error
      );
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <section className="h-full w-full flex justify-center items-center p-8">
        <form
          onSubmit={handleSubmit}
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
            />
          </div>
          <button className="btn">{isLogin ? "Login" : "Register"}</button>
          <div>
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <Link>
                <button onClick={toggleForm} className="text-blue-500">
                  {isLogin ? "Register" : "Login"}
                </button>
              </Link>{" "}
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
