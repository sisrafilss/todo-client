import React from "react";

const AddTask = () => {
  return (
    <div className="flex flex-col w-1/3 mx-auto mt-5">
      <h1 className="mt-4 mb-3 text-2xl font-medium">Add Task</h1>
      <form className="flex flex-col ">
        <input
          className="border px-3 text-black opacity-90 py-2 mb-5 rounded w-full focus:outline-none"
          type="text"
          placeholder="Task Title"
        />
        <textarea
          className="border px-3 py-2 text-black opacity-90 mb-5 rounded w-full focus:outline-none"
          name=""
          cols="30"
          rows="4"
          placeholder="Task Description"
        ></textarea>
        <input
          className="border px-3 py-2 mb-5 text-black opacity-90 rounded w-full focus:outline-none"
          type="date"
        />
        <button
          type="submit"
          className="px-2 py-2 bg-slate-600 text-white rounded font-medium text-base"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
