import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/authContext";

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const { loading, setLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskRes = await axios.get(`http://localhost:3000/task/allTasks`, {
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
      await axios.delete(`http://localhost:3000/task/${id}`, {
        withCredentials: true,
      });
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (error) {
      console.log("Error delete task", error);
    }
  };
  return (
    <div className="w-full p-4">
      <div className="p-8 shadow-md rounded-md">
        {loading ? (
          <p className="text-center text-gray-500 text-xl">Loading...</p>
        ) : tasks.length === 0 ? (
          <p className="text-3xl text-gray-500 text-center">No Tasks Found</p>
        ) : (
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {tasks.map((task, index) => (
              <li
                key={task._id}
                className="p-4 rounded hover:scale-105 duration-300 shadow-md"
              >
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-sm text-gray-600">{task.description}</p>
                <p className="text-sm text-blue-600">
                  Due:{" "}
                  {task.date
                    ? new Date(task.date).toLocaleDateString()
                    : "No Date"}
                </p>
                <div className="flex space-x-4 w-2/3">
                  <Link to={`/task/editTask/${task._id}`}>
                    Edit <FaEdit className="inline h-6 w-6 text-gray-500" />
                  </Link>
                  <button onClick={() => deleteTask(task._id)}>
                    Delete{" "}
                    <MdDelete className="inline w-6 h-6 hover:scale-110 duration-200 text-red-500" />
                  </button>
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
