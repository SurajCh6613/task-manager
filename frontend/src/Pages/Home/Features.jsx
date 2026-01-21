import React from "react";
import { CheckCircle, Bell, Edit3, Trash2, PlusCircle } from "lucide-react";
const Features = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gray-100 py-8 px-3">
      <h1 className="text-2xl md:text-4xl font-semibold mb-12">
        Features That Help You Stay Organized
      </h1>
      <div className="grid md:grid-cols-2 max-w-6xl gap-8 text-white mx-auto">
        <div className="p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl shadow-lg text-center">
          <PlusCircle className="mx-auto w-12 h-12  mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Create Task</h3>
           <p className="text-xl">
            Easily add tasks with titles, descriptions, and deadlines.
          </p>
        </div>
        <div className="p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl shadow-lg text-center">
          <CheckCircle className="mx-auto w-12 h-12 mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">View All Tasks</h3>
          <p className="text-xl">
            Get a clean list of all your pending and completed tasks in one
            place.
          </p>
        </div>
        <div className="p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl shadow-lg text-center">
          <Edit3 className="mx-auto w-12 h-12 mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Update Task</h3>
           <p className="text-xl">
            Edit task details like deadlines, descriptions, and priorities.
          </p>
        </div>
        <div className="p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl shadow-lg text-center">
          <Trash2 className="mx-auto w-12 h-12mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Delete Task</h3>
            <p className="text-xl">
            Remove completed or unwanted tasks to stay clutter-free.
          </p>
        </div>
        <div className="p-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl shadow-lg text-center md:col-span-2">
          <Bell className="mx-auto w-12 h-12  mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold mb-2">Auto Reminders</h3>
          <p className="text-xl">
            Get automatic reminders for upcoming tasks so you never miss
            deadlines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
