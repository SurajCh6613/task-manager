import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BACKEND_API from "../../config";
import toast from "react-hot-toast";

const AddTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BACKEND_API}/task/addTask`, formData, {
        withCredentials: true,
      });
      toast.success("Task Created Successfully.");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error || "Something went wrong!");
    }
  };
  return (
    <div>
      <div className="w-full pt-12 md:pt-16 h-full p-4">
        <form onSubmit={handleSubmit} className="p-8 shadow-md rounded-md">
          <h2 className="text-4xl mb-4">Add Task</h2>
          <div className="flex mb-4">
            <label htmlFor="" className="py-3 w-34 text-xl">
              Task Title
            </label>
            <input
              type="text"
              className="input"
              name="title"
              placeholder="Task Title"
              onChange={handleInput}
            />
          </div>
          <div className="flex  mb-4">
            <label htmlFor="" className="py-3 w-34 text-xl">
              Task Description
            </label>
            <textarea
              type="text"
              name="description"
              className="input"
              onChange={handleInput}
              placeholder="Task Title"
              rows="5"
            />
          </div>
          <div className="flex mb-4">
            <label htmlFor="" className="py-3 w-34 text-xl">
              Task Date
            </label>
            <input
              type="date"
              name="date"
              onChange={handleInput}
              className="input"
              placeholder="Task Title"
            />
          </div>
          <button type="submit" className="btn text-center text-2xl">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
