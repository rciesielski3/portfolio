import React from "react";

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="spinner border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
      <span className="ml-2 text-gray-700">{message}</span>
    </div>
  );
};

export default LoadingSpinner;
