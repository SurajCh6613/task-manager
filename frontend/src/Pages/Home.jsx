import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/homeImage.jpg";

const Home = () => {
  return (
    <>
      <div className="w-full pt-8 flex md:flex-col-reverse lg:flex-row  gap-2">
        {/* Left Side */}
        <div className="lg:w-2/3 md:w-full w-full p-3 h-[100%]">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Welcome to TaskMaster!
          </h1>
          <p className="text-2xl pr-4 text-gray-700 mb-8">
            Stay organized and boost your productivity with our simple and
            intuitive To-Do App. Manage your tasks efficiently, set priorities,
            and never miss a deadline again.
          </p>
          <div className="flex space-x-4">
            <Link to="/AddTask">
              <button className="btn">
                Add Task
              </button>
            </Link>
            <Link to="/allTasks">
              <button className="btn btn-2">
                View Task
              </button>
            </Link>
          </div>
        </div>
        {/* Right Side */}
        <div className="p-3 w-full flex items-center justify-center md:w-full lg:w-1/3 h-[100%]">
          <img src={homeImage} alt="Home Image" className="h-[20rem] w-[20rem]" />
        </div>
      </div>
    </>
  );
};

export default Home;
