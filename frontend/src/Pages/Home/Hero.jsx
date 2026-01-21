import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative section-padding min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-4xl md:px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight font-extrabold mb-6 drop-shadow-lg">
          Organize Your Work.
          <span className="block text-yellow-300">
            Boost Your Productivity.
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100">
          Task Manager helps you plan, prioritize, and track your tasks
          seamlessly — so you can focus on what truly matters.
        </p>
        <div className="flex justify-center gap-2 md:gap-4">
          <Link
            to={"/login"}
            className="px-4 py-2 md:px-8 md:py-4 bg-yellow-400 hover:bg-yellow-300 cursor-pointer text-black font-semibold rounded-lg transition"
          >
            Get Started
          </Link>
          <Link
            to={"/about"}
            className="border bg-white/20 px-4 py-2 md:px-8 md:py-4 cursor-pointer rounded-lg font-semibold hover:bg-white/30 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
