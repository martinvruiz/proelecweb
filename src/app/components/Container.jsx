import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-gray-200 text-black">
      {children}
    </div>
  );
}
