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
        <h2 className="text-2xl font-semibold">My Task</h2>
        <button className="btn flex gap-1" onClick={() => navigate("/AddTask")}>
          {" "}
         <PlusCircle/> {tasks.length === 0 ? "Add Task" : "Add More Task"}
        </button>
      </div>
      <div className="p-4 rounded-md">
        {loading ? (
          <p className="text-center text-gray-500 text-xl">Loading...</p>
        ) : tasks.length === 0 ? (
          <p className="text-3xl text-gray-500 text-center">No Tasks Found</p>
        ) : (
          <ul className="grid gap-3">
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
                    <Link to={`/task/editTask/${task._id}`}>
                      Edit <FaEdit className="inline h-6 w-6 text-gray-500" />
                    </Link>
                    <button
                      onClick={() => deleteTask(task._id)}
                      className="cursor-pointer"
                    >
                      Delete{" "}
                      <MdDelete className="inline w-6 h-6 hover:scale-110 duration-200 text-red-500" />
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
