import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/authContext";
import BACKEND_API from "../../config";
import { PlusCircle } from "lucide-react";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const { loading, setLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskRes = await axios.get(`${BACKEND_API}/task/allTasks`, {
          withCredentials: true,
        });
        setTasks(taskRes.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTask();
  }, []);

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${BACKEND_API}/task/${id}`, {
        withCredentials: true,
      });
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.log("Error delete task", error);
    }
  };
  return (
    <div className="w-full p-4">
      <div className="flex items-center justify-between py-2">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          My Task
        </h2>
        <button
          className="btn text-xs flex items-center gap-1"
          onClick={() => navigate("/AddTask")}
        >
          {" "}
          <PlusCircle /> {tasks.length === 0 ? "Add Task" : "Add More Task"}
        </button>
      </div>
      <div className="md:p-4 rounded-md">
        {loading ? (
          <p className="text-center text-gray-500 text-xl">Loading...</p>
        ) : tasks.length === 0 ? (
          <p className="md:text-3xl text-gray-500 text-center">
            No Tasks Found
          </p>
        ) : (
          <ul className="grid md:grid-cols-2 gap-3">
            {tasks.map((task, index) => (
              <li
                key={task._id}
                className="p-4 rounded hover:scale-101 duration-300 shadow-md"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">{task.title}</h3>
                    <p className="text-sm text-gray-600">{task.description}</p>
                    <p className="text-sm text-blue-600">
                      Due:{" "}
                      {task.date
                        ? new Date(task.date).toLocaleDateString()
                        : "No Date"}
                    </p>
                  </div>
                  <div className="space-x-4">
                    <Link to={`/task/editTask/${task._id}`} className="hover:text-green-500">Edit</Link>
                    <button
                      onClick={() => deleteTask(task._id)}
                      className="cursor-pointer text-red-500 hover:text-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyTasks;
