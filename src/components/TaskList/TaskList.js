import React, { useState } from "react";
import "./TaskList.css";
import update from "../../img/edit.png";
import dlete from "../../img/delete.png";
import AddTask from "../AddTask/AddTask";
import EditTask from "../EditTask/EditTask";
import DialogBox from "../DialogBox/DialogBox";

const TaskList = () => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [dialogBox, setDialogBox] = useState(false);

  const toggleAddModal = () => {
    setAddModal(!addModal);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
  };

  const toggleDialogBox = () => {
    setDialogBox(!dialogBox);
  };

  return (
    <>
      <div className="w-2/3 mx-auto mt-16">
        <div className="flex justify-between ">
          <h2 className="text-2xl font-bold">Task List</h2>
          <button
            onClick={toggleAddModal}
            className="px-2 py-2 bg-slate-600 text-white rounded font-medium text-base"
          >
            Add New Task
          </button>
        </div>

        <table className="table-auto mt-6 w-full">
          <thead className="bg-gray-200">
            <tr className="border">
              <th className="px-6 py-3 border ">#</th>
              <th className="px-6 py-3 border">Title</th>
              <th className="px-6 py-3 border">Description</th>
              <th className="px-6 py-3 border">Due Date</th>
              <th className="px-6 py-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="cursor-pointer">
              <td className="px-6 py-3 border ">1</td>
              <td className="px-6 py-3 border ">Hefzul Quran</td>
              <td className="px-6 py-3 border ">
                Review the 1st para. First recite ...
              </td>
              <td className="px-6 py-3 border ">5 Apr 2023</td>
              <td className="px-6 py-3 border flex justify-between">
                <img
                  className="w-6 h-6 cursor-pointer mr-2"
                  src={update}
                  alt=""
                  title="Edit"
                  onClick={toggleEditModal}
                />
                <img
                  className="w-6 h-6 cursor-pointer "
                  src={dlete}
                  alt=""
                  title="Delete"
                  onClick={toggleDialogBox}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {addModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <AddTask toggleAddModal={toggleAddModal} />
            </div>
          </div>
        </div>
      )}

      {editModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <EditTask toggleEditModal={toggleEditModal} />
            </div>
          </div>
        </div>
      )}

      {dialogBox && <DialogBox toggleDialogBox={toggleDialogBox} />}
    </>
  );
};

export default TaskList;
