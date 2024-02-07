import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-12 h-12 border-t-4 border-b-4 border-gray-500 rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
