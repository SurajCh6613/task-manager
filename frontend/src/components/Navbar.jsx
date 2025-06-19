import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between px-6 py-3  shadow-md">
        <Link to="/">
          <h1 className="text-4xl font-bold">Todo</h1>
        </Link>
        <ul className="flex space-x-8 text-xl">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/MyTasks">
            <li>My Task</li>
          </Link>
          <Link to="/AddTask">
            <li>Add Task</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
