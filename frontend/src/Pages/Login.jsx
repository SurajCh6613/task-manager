import { Link } from "react-router-dom";
import "../index.css";
import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <section className="h-full flex justify-center items-center p-8">
        <form className="bg-gray-100 w-1/3 text-center rounded-md shadow-lg flex flex-col space-y-6 py-8 justify-center items-center">
          <h2 className="text-2xl font-semibold">
            {!isLogin ? "Login" : "Register"}
          </h2>
          {isLogin && (
            <div className="flex">
              <label className="py-3 w-20">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Fullname"
                className="input"
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
            />
          </div>
          <div className="flex">
            <label className=" py-3 w-20">Password</label>
            <input type="password" name="password" className="input" />
          </div>
          <button className="btn">{isLogin ? "Register" : "Login"}</button>
          <div>
            <p>
              {isLogin ? "Already have an account?" : "Don't have an account?"}{" "}
              <Link>
                <button onClick={toggleForm} className="text-blue-500">{isLogin?"Login":"Register"}</button>
              </Link>{" "}
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
