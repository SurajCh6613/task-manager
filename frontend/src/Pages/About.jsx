import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pt-16">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-6 px-6 shadow-md">
        <h1 className="text-3xl font-bold">About Task Manager</h1>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto py-12 px-6 space-y-10">
        {/* Intro */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">
            Simple. Powerful. Reliable.
          </h2>
          <p className="text-lg text-gray-600">
            Task Manager is a lightweight productivity tool designed to help you
            stay organized and never miss a deadline. Whether it’s daily tasks,
            personal goals, or work-related projects — Task Manager makes it
            simple to create, update, and manage your tasks with automatic
            reminders.
          </p>
        </section>

        {/* Features */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
            What You Can Do
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>
              ✅ <b>Create</b> tasks with deadlines
            </li>
            <li>
              ✅ <b>Read</b> and view all tasks in one place
            </li>
            <li>
              ✅ <b>Update</b> tasks when plans change
            </li>
            <li>
              ✅ <b>Delete</b> completed or unnecessary tasks
            </li>
            <li>
              ✅ <b>Auto reminders</b> for upcoming deadlines
            </li>
          </ul>
        </section>

        {/* Why Use */}
        <section>
          <h3 className="text-2xl font-semibold mb-4 text-indigo-600">
            Why Use Task Manager?
          </h3>
          <p>
            Many people struggle to keep track of their daily activities and
            deadlines. Our Task Manager keeps things simple — no clutter, no
            unnecessary features — just the essential tools you need to stay
            productive. It’s fast, user-friendly, and available anywhere.
          </p>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-2xl font-bold text-indigo-600 mb-4">
            Start Managing Your Tasks Today 🚀
          </h3>
          <a
            href="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-500 transition"
          >
            Go Back to Home
          </a>
        </section>
      </main>    
    </div>
  );
};

export default About;
