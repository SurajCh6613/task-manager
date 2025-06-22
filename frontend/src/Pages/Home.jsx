import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/homeImage.png";

const Home = () => {
  return (
    <>
      <div className="w-full pt-8 md:pt-24 lg:pt-34 flex flex-col-reverse md:flex-row  lg:flex-row  gap-2">
        {/* Left Side */}
        <div className="lg:w-2/3  w-full p-3 h-[100%]">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800 mb-4 md:mb-8">
            Welcome to TaskMaster!
          </h1>
          <p className="md:text-2xl text-xl pr-4 text-gray-700 mb-4 md:mb-8">
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
        <div className="p-3 w-full flex items-center justify-center lg:w-1/3 h-full">
          <img src={homeImage} alt="Home Image" className="h-[20rem] w-[20rem]" />
        </div>
      </div>
    </>
  );
};

export default Home;
