import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyTasks = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Learn React",
      description:
        "Complete Hooks Complete Hooks Complete Hooks v Complete Hooks Complete Hooks",
      time: "2025-06-21",
    },
    {
      title: "Learn React",
      description:
        "Complete Hooks Complete Hooks Complete Hooks v Complete Hooks Complete Hooks",
      time: "2025-06-21",
    },
    {
      title: "Learn React",
      description:
        "Complete Hooks Complete Hooks Complete Hooks v Complete Hooks Complete Hooks",
      time: "2025-06-21",
    },
    {
      title: "Learn React",
      description:
        "Complete Hooks Complete Hooks Complete Hooks v Complete Hooks Complete Hooks",
      time: "2025-06-21",
    },
  ]);
  return (
    <div>
      <div className="w-full p-4">
        <form action="" className="p-8 shadow-md rounded-md">
          {tasks.length === 0 ? (
            <p className="text-3xl text-gray-500 text-center">No Tasks Found</p>
          ) : (
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {tasks.map((task, index) => (
                <li key={index} className="border p-4 rounded">
                  <h3 className="text-lg font-semibold">{task.title}</h3>
                  <p className="text-sm text-gray-600">{task.description}</p>
                  <p className="text-sm text-blue-600">Due: {task.time}</p>
                  <div className="flex space-x-4 w-2/3">
                    <Link to="/task/editTask">
                      <button className="py-3">
                        Edit <FaEdit className="inline h-6 w-6 text-gray-500" />
                      </button>
                    </Link>
                    <button>
                      Delete{" "}
                      <MdDelete className="inline w-6 h-6 text-red-500" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </form>
      </div>
    </div>
  );
};

export default MyTasks;
