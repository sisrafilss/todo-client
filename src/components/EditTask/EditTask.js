import { useForm } from "react-hook-form";
import closeIcon from "../../img/close.png";
import axios from "axios";

const EditTask = ({
  toggleEditModal,
  editingTask,
  setShowSuccessMessage,
  setShowErrorMessage,
}) => {
  // handle form
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const updatedTask = {
      _id: editingTask._id,
      ...data,
    };
    axios
      .put("https://todo-server-lv0x.onrender.com/edit-task", updatedTask)
      .then((res) => {
        if (res.data.modifiedCount) {
          toggleEditModal();
          setShowSuccessMessage(true);
        }
      })
      .catch((error) => {
        toggleEditModal();
        setShowErrorMessage(true);
      });
  };

  return (
    <div>
      <div className="flex flex-col w-full bg-white py-8 px-12 rounded relative">
        <h2 className="mb-3  text-2xl font-medium">Edit Task</h2>
        <img
          onClick={toggleEditModal}
          src={closeIcon}
          className="w-3 h-3 absolute top-4 right-4 cursor-pointer"
          alt=""
        />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <input
            className="border px-3 text-black opacity-90 py-2 mb-5 rounded w-full focus:outline-none"
            type="text"
            placeholder="Task Title"
            defaultValue={editingTask?.title}
            {...register("title")}
          />
          <textarea
            className="border px-3 py-2 text-black opacity-90 mb-5 rounded w-full focus:outline-none"
            name=""
            cols="30"
            rows="4"
            placeholder="Task Description"
            defaultValue={editingTask?.description}
            {...register("description")}
          ></textarea>
          <input
            className="border px-3 py-2 mb-5 text-black opacity-90 rounded w-full focus:outline-none"
            type="date"
            defaultValue={editingTask?.dueDate}
            {...register("dueDate")}
          />
          <input
            type="submit"
            className="px-2 py-2 bg-slate-600 cursor-pointer text-white rounded font-medium text-base hover:bg-slate-700"
            // onClick={toggleModal}
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default EditTask;
