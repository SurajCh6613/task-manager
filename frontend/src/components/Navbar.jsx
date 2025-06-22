import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Logout from "./Logout";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navItems = (
    <>
      <Link to="/">
        <li
          className="hover:scale-105 duration-300 hover:text-blue-500"
          onClick={() => setIsOpen(false)}
        >
          Home
        </li>
      </Link>
      <Link to="/allTasks">
        <li
          className="hover:scale-105 duration-300 hover:text-blue-500"
          onClick={() => setIsOpen(false)}
        >
          My Task
        </li>
      </Link>

      <Link to="/AddTask">
        <li
          className="hover:scale-105 duration-300 hover:text-blue-500"
          onClick={() => setIsOpen(false)}
        >
          Add Task
        </li>
      </Link>
      {user && (
        <Link to="/dashboard">
          <li
            className="hover:scale-105 duration-300 hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </li>
        </Link>
      )}
      <li
        className="hover:scale-105 duration-300 hover:text-blue-500 pt-0"
        onClick={() => setIsOpen(false)}
      >
        {user ? <Logout /> : <Link to="/login">Login</Link>}
      </li>
    </>
  );

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full flex justify-between px-6 py-3  shadow-md fixed bg-white">
        <Link to="/">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold hover:scale-105 duration-300 hover:text-blue-500">
            Task Master
          </h1>
        </Link>
        <ul className="flex space-x-8 pt-2 text-xl hidden lg:flex">
          {navItems}
        </ul>

        {/* Mobile navigation */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative  text-4xl top-0 right-0 lg:hidden"
        >
          {isOpen ? "" : <MdOutlineMenu />}
        </button>
        <div
          className={`fixed top-0 left-0 w-64 shadow-lg h-full bg-white transform transition-transform duration-300  ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute p-4 top-0 right-0 text-2xl"
          >
            <MdOutlineClose />
          </button>
          <ul className="space-x-8 py-16 px-8">{navItems}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
