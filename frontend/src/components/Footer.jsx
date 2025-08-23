import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-xl md:text-2xl text-center">
      <p>© {new Date().getFullYear()} Task Manager. All Rights Reserved.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="https://github.com/SurajCh6613" className="hover:text-white">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/surajch6613"
          className="hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href="mailto:surajchaudhary6613@gmail.com"
          className="hover:text-white"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
