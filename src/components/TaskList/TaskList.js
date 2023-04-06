import React, { useEffect, useState } from "react";
import "./TaskList.css";
import update from "../../img/edit.png";
import dlete from "../../img/delete.png";
import AddTask from "../AddTask/AddTask";
import EditTask from "../EditTask/EditTask";
import DialogBox from "../DialogBox/DialogBox";
import TaskDetail from "../TaskDetail/TaskDetail";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const TaskList = () => {
  const [modalActive, setModalActive] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [dialogBox, setDialogBox] = useState(false);
  const [showTaskDetail, setShowTaskDetail] = useState(false);
  const [taskDetail, setTaskDetail] = useState({});
  const [tasks, setTasks] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [delTaskId, setDelTaskId] = useState("");
  const [editingTask, setEditingTask] = useState({});
  const { user } = useAuth();

  // handle toggle add task modal
  const toggleAddModal = () => {
    setAddModal(!addModal);
    setModalActive(!modalActive);
  };

  // handle toggle edit task modal
  const toggleEditModal = () => {
    setEditModal(!editModal);
    setModalActive(!modalActive);
  };

  // handle toggle showing dialogbox modal
  const toggleDialogBox = () => {
    setDialogBox(!dialogBox);
    setModalActive(!modalActive);
  };

  // handle toggle task detail modal
  const toggleTaskDetailModal = () => {
    setShowTaskDetail(!showTaskDetail);
    setModalActive(!modalActive);
  };

  // handle task detail modal
  const handleTaskDetail = (task, event) => {
    if (
      event.target.nodeName === "TD" &&
      event.target !== event.currentTarget.lastChild
    ) {
      toggleTaskDetailModal();
      setTaskDetail(task);
    }
  };

  // handle edit modal
  const handleEditModal = (task) => {
    setEditingTask(task);
    toggleEditModal();
  };

  // Hide scroll bar while modal is active
  if (modalActive) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // load all tasks from db
  useEffect(() => {
    axios
      .get(`https://todo-server-lv0x.onrender.com/all-tasks/${user?.email}`)
      .then((res) => setTasks(res.data));
  }, [addModal, delTaskId, editModal, user?.email]);

  // handle delete task
  const handleDeleteTask = (id) => {
    setDialogBox(true);
    setDelTaskId(id);
  };

  return (
    <>
      <div className="lg:w-2/3 md:w-3/4 md:mx-auto w-full px-7  mt-28 pb-10">
        {/* Show success message when an operation is completed */}
        {showSuccessMessage && (
          <SuccessMessage
            showSuccessMessage={showSuccessMessage}
            setShowSuccessMessage={setShowSuccessMessage}
          />
        )}

        {/* Show Error message when an operation is failed */}
        {showErrorMessage && (
          <ErrorMessage
            showErrorMessage={showErrorMessage}
            setShowErrorMessage={setShowErrorMessage}
          />
        )}

        <div className="flex justify-between ">
          {/* Conditionally show the task list heading or not */}
          {tasks.length ? (
            <h2 className="text-2xl font-bold">Task List</h2>
          ) : (
            <h2 className="text-2xl font-bold">Your Task List is Empty</h2>
          )}

          <button
            onClick={toggleAddModal}
            className="px-4 py-2 inline  bg-slate-600 text-white rounded font-medium text-base hover:bg-slate-700"
          >
            Add New Task
          </button>
        </div>

        {/* Show the task list table if atl least one task */}
        {tasks.length > 0 && (
          <table className="table-auto mt-6 w-full border border-slate-400">
            <thead className="bg-gray-200">
              <tr className="border">
                <th className="md:px-6 md:py-3 px-3 py-1 border ">#</th>
                <th className="md:px-6 md:py-3 px-3 py-1 border">Title</th>
                <th className="md:px-6 md:py-3 px-3 py-1 border">Description</th>
                <th className="md:px-6 md:py-3 px-3 py-1 border">Due Date</th>
                <th className="md:px-6 md:py-3 px-3 py-1 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, idx) => (
                <tr
                  key={idx}
                  className="cursor-pointer hover:bg-slate-100"
                  onClick={(event) => handleTaskDetail(task, event)}
                >
                  <td className="md:px-6 md:py-3 px-3 py-1 border ">{idx + 1}</td>
                  <td className="md:px-6 md:py-3 px-3 py-1 border ">{task.title}</td>
                  <td className="md:px-6 md:py-3 px-3 py-1 border ">
                    {task.description.slice(0, 40)} [...]
                  </td>
                  <td className="md:px-6 md:py-3 px-3 py-1 border ">{task.dueDate}</td>
                  <td className="md:px-6 md:py-3 px-3 py-1 md:flex-row flex justify-between flex-col">
                    <img
                      className="w-6 h-6 cursor-pointer mr-2"
                      src={update}
                      alt=""
                      title="Edit"
                      onClick={() => handleEditModal(task)}
                    />
                    <img
                      className="w-6 h-6 cursor-pointer "
                      src={dlete}
                      alt=""
                      title="Delete"
                      onClick={() => handleDeleteTask(task?._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add a new task modal */}
      {addModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <AddTask
                setShowSuccessMessage={setShowSuccessMessage}
                setShowErrorMessage={setShowErrorMessage}
                toggleAddModal={toggleAddModal}
              />
            </div>
          </div>
        </div>
      )}

      {/* Edit a task for update modal */}
      {editModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <EditTask
                editingTask={editingTask}
                toggleEditModal={toggleEditModal}
                setShowErrorMessage={setShowErrorMessage}
                setShowSuccessMessage={setShowSuccessMessage}
              />
            </div>
          </div>
        </div>
      )}

      {/* Confirm user before deleting a task */}
      {dialogBox && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <DialogBox
                delTaskId={delTaskId}
                toggleDialogBox={toggleDialogBox}
                setDelTaskId={setDelTaskId}
                setShowErrorMessage={setShowErrorMessage}
                setShowSuccessMessage={setShowSuccessMessage}
              />
            </div>
          </div>
        </div>
      )}

      {/* Show a task detail */}
      {showTaskDetail && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <TaskDetail
                taskDetail={taskDetail}
                toggleTaskDetailModal={toggleTaskDetailModal}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskList;
