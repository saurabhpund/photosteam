import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-gray-200 dark:bg-gray-700 dark:text-black">
      <p>&copy; {new Date().getFullYear()} VisionaryVault. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
