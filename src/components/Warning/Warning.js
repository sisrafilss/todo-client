import React from "react";

const Warning = ({ authError, setAuthError }) => {
  return (
    <div
      className="bg-red-100 mb-4 mt-4 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Warning!</strong>
      <span className="block sm:inline"> {authError}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <svg
          onClick={() => setAuthError("")}
          className="fill-current h-6 w-6 text-red-500"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1 1 0 01-1.414 0L10 11.414l-2.93 2.93a1 1 0 01-1.414-1.414l2.93-2.93-2.93-2.93a1 1 0 011.414-1.414l2.93 2.93 2.93-2.93a1 1 0 011.414 1.414l-2.93 2.93 2.93 2.93a1 1 0 010 1.414z" />
        </svg>
      </span>
    </div>
  );
};

export default Warning;
