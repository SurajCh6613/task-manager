import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between px-6 py-3  shadow-md">
        <Link to="/">
          <h1 className="text-4xl font-bold hover:scale-105 duration-300 hover:text-blue-500">
            Task Master
          </h1>
        </Link>
        <ul className="flex space-x-8 text-xl">
          <Link to="/">
            <li className="hover:scale-105 duration-300 hover:text-blue-500">
              Home
            </li>
          </Link>
          <Link to="/MyTasks">
            <li className="hover:scale-105 duration-300 hover:text-blue-500">
              My Task
            </li>
          </Link>
          <Link to="/AddTask">
            <li className="hover:scale-105 duration-300 hover:text-blue-500">
              Add Task
            </li>
          </Link>
          <Link to="/login">
            <li className="hover:scale-105 duration-300 hover:text-blue-500">
              Login
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
