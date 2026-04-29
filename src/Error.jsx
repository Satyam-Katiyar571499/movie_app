import React from "react";
import { Link } from "react-router-dom";
// import errorImg from "public/ChatGPT Image Mar 29, 2026, 07_50_35 AM"

const error = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center  from-[#1e1e2f] to-[#2c2c54] text-white px-4">

      {/* Image */}
     <img
  src="/ChatGPT Image Mar 29, 2026, 07_50_35 AM.png"
  alt="404 error"
  className="w-72 mb-6 animate-bounce"
/>

      {/* Text */}
      <h1 className="text-7xl font-bold text-red-400">404</h1>

      <h2 className="text-2xl mt-2 font-semibold">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-300 mt-2 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-red-400 rounded-lg hover:bg-red-500 transition duration-300 shadow-lg"
      >
        Go Home
      </Link>
    </div>
  );
};

export default error;