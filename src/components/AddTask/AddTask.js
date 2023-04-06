import React from "react";
import closeIcon from "../../img/close.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const AddTask = ({
  toggleAddModal,
  setShowSuccessMessage,
  setShowErrorMessage,
}) => {
  const { user } = useAuth();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const addEmail = { email: user?.email, ...data };
    axios
      .post("https://todo-server-lv0x.onrender.com/add-task", addEmail)
      .then((res) => {
        if (res?.data?.insertedId) {
          toggleAddModal();
          setShowSuccessMessage(true);
        }
      })
      .catch((error) => {
        toggleAddModal();
        setShowErrorMessage(true);
      });
  };

  return (
    <div className="flex flex-col w-full bg-white py-8 px-12 rounded relative">
      <h2 className="mb-3  text-2xl font-medium">Add Task</h2>
      <img
        onClick={toggleAddModal}
        src={closeIcon}
        className="w-3 h-3 absolute top-4 right-4 cursor-pointer"
        alt=""
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
        <input
          className="border px-3 text-black opacity-90 py-2 mb-5 rounded w-full focus:outline-none"
          type="text"
          placeholder="Task Title"
          {...register("title")}
        />
        <textarea
          className="border px-3 py-2 text-black opacity-90 mb-5 rounded w-full focus:outline-none"
          name=""
          cols="30"
          rows="4"
          placeholder="Task Description"
          {...register("description")}
        ></textarea>
        <input
          className="border px-3 py-2 mb-5 text-black opacity-90 rounded w-full focus:outline-none"
          type="date"
          {...register("dueDate")}
        />
        <input
          type="submit"
          className="px-2 py-2 bg-slate-600 text-white rounded font-medium text-base cursor-pointer hover:bg-slate-700"
          // onClick={toggleModal}
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddTask;
