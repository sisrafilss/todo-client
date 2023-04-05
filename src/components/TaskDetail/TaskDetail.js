import React from "react";
import closeIcon from "../../img/close.png";

function TaskDetail({ taskDetail, toggleTaskDetailModal }) {
  const { title, description, dueDate } = taskDetail;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img
        onClick={toggleTaskDetailModal}
        src={closeIcon}
        className="w-3 h-3 absolute top-4 right-4 cursor-pointer"
        alt=""
      />
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex items-center">
        <svg
          className="w-5 h-5 fill-current text-gray-500 mr-2"
          viewBox="0 0 20 20"
        >
          <path d="M15 5H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2zM5 11v-1h10v1H5z" />
        </svg>
        <span className="text-gray-700">Due Date: {dueDate}</span>
      </div>
    </div>
  );
}

export default TaskDetail;
