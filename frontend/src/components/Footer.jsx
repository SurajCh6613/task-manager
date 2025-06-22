import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 text-center mt-auto">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Task Manager. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
