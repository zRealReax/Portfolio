import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
