"use client";

import React from "react";

const CustomLoader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="flex space-x-2">
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
        <div className="loader-circle"></div>
      </div>
    </div>
  );
};

export default CustomLoader;
