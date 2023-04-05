import React from "react";
import closeIcon from "../../img/close.png";

const AddTask = ({ toggleAddModal }) => {
  return (
    <div className="flex flex-col w-full bg-white py-8 px-12 rounded relative">
      <h2 className="mb-3  text-2xl font-medium">Add Task</h2>
      <img
        onClick={toggleAddModal}
        src={closeIcon}
        className="w-3 h-3 absolute top-4 right-4 cursor-pointer"
        alt=""
      />
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
          // onClick={toggleModal}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTask;
