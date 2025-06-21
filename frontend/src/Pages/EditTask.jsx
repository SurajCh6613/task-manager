import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // UseEffect to fetch task and set formdata
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/task/getTask/${id}`,
          { withCredentials: true }
        );
        setFormData({
          title: res.data.title,
          description: res.data.description,
          date: res.data.date?.split("T")[0], // optional: format for input[type="date"]
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  //  Function to handle form submit to update task
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/task/editTask/${id}`, formData, {
      withCredentials: true,
    });
    navigate("/allTasks")
  };
  return (
    <div>
      <div className="w-full p-4">
        <form onSubmit={handleSubmit} className="p-8 shadow-md rounded-md">
          <h2 className="text-4xl mb-4">Edit Task</h2>
          <div className="flex mb-4">
            <label htmlFor="" className="py-3 w-34">
              Task Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleOnChange}
              className="input"
              value={formData.title}
              placeholder="Task Title"
            />
          </div>
          <div className="flex  mb-4">
            <label htmlFor="" className="py-3 w-34">
              Task Description
            </label>
            <textarea
              type="text"
              name="description"
              className="input"
              placeholder="Task Title"
              onChange={handleOnChange}
              rows="5"
              value={formData.description}
            />
          </div>
          <div className="flex mb-4">
            <label htmlFor="" className="py-3 w-34">
              Task Date
            </label>
            <input
              type="date"
              name="date"
              className="input"
              placeholder="Task Title"
              onChange={handleOnChange}
              value={formData.date}
            />
          </div>
          <button className="btn text-center">Update Task</button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
