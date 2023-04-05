import React, { useEffect, useState } from "react";
import "./TaskList.css";
import update from "../../img/edit.png";
import dlete from "../../img/delete.png";
import AddTask from "../AddTask/AddTask";
import EditTask from "../EditTask/EditTask";
import DialogBox from "../DialogBox/DialogBox";
import TaskDetail from "../TaskDetail/TaskDetail";

const tasksSample = [
  {
    id: 1,
    title: "Buy groceries",
    description:
      "I need to go to the grocery store and get a few essential items for the week. I need to make sure to buy milk, eggs, bread, cheese and other items that are needed for my meals.",
    dueDate: "2023-04-07",
  },
  {
    id: 2,
    title: "Clean the house",
    description:
      "It's been a while since I last cleaned the house, so I need to get everything back in order. I will start by vacuuming, dusting, and mopping the floors. Then, I will organize my belongings and clean the bathroom and kitchen.",
    dueDate: "2023-04-10",
  },
  {
    id: 3,
    title: "Pay bills",
    description:
      "I need to pay my bills before the due date to avoid late fees. I have to pay for electricity, water, and internet bills. I will log in to my bank account and pay the bills online.",
    dueDate: "2023-04-12",
  },
  {
    id: 4,
    title: "Go to the gym",
    description:
      "I need to work on my fitness and I plan on going to the gym today. I will start with cardio and then lift some weights. After that, I will stretch and cool down.",
    dueDate: "2023-04-09",
  },
  {
    id: 5,
    title: "Finish project",
    description:
      "I have a project that I need to finish by the end of the week. I will do a code review and document everything that I have done. I will also make sure that everything is working as expected and make any necessary changes.",
    dueDate: "2023-04-15",
  },
  {
    id: 6,
    title: "Call mom",
    description:
      "I need to check up on my mom and see how she is doing. I will call her and ask about her health, work, and life in general. We will have a nice conversation and catch up on things.",
    dueDate: "2023-04-08",
  },
  {
    id: 7,
    title: "Read a book",
    description:
      "I have been meaning to read Crime and Punishment by Fyodor Dostoevsky for a while now. I will make some time today to read a few chapters and hopefully finish the book soon.",
    dueDate: "2023-04-13",
  },
  {
    id: 8,
    title: "Plan vacation",
    description:
      "I need to plan my next vacation and decide on a destination. I will do some research online and compare prices and reviews. Once I have decided on a place, I will book my flights and accommodation.",
    dueDate: "2023-05-01",
  },
  {
    id: 9,
    title: "Attend meeting",
    description:
      "I have an important meeting today with my team to discuss the progress of our project. We will go over everything that has been done so far and make plans for the next steps. I will prepare some notes and be ready to contribute to the discussion.",
    dueDate: "2023-04-11",
  },
  {
    id: 10,
    title: "Write report",
    description:
      "I need to write a report based on some data that I have collected. I will analyze the data and present my findings in a clear and concise manner. I will also make some recommendations based on the results.",
    dueDate: "2023-04-14",
  },
];

const TaskList = () => {
  const [modalActive, setModalActive] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [dialogBox, setDialogBox] = useState(false);
  const [showTaskDetail, setShowTaskDetail] = useState(false);
  const [taskDetail, setTaskDetail] = useState({});
  const [tasks, setTasks] = useState([]);

  const toggleAddModal = () => {
    setAddModal(!addModal);
    setModalActive(!modalActive);
  };

  const toggleEditModal = () => {
    setEditModal(!editModal);
    setModalActive(!modalActive);
  };

  const toggleDialogBox = () => {
    setDialogBox(!dialogBox);
    setModalActive(!modalActive);
  };

  const toggleTaskDetailModal = () => {
    setShowTaskDetail(!showTaskDetail);
    setModalActive(!modalActive);
  };

  const handleTaskDetail = (task) => {
    toggleTaskDetailModal();
    setTaskDetail(task);
  };

  if (modalActive) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // useEffect(() => {
  //   setTasks(tasksSample);
  // }, []);

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
            {tasksSample.map((task, idx) => (
              <tr
                key={idx}
                className="cursor-pointer"
                onClick={() => handleTaskDetail(task)}
              >
                <td className="px-6 py-3 border ">{idx + 1}</td>
                <td className="px-6 py-3 border ">{task.title}</td>
                <td className="px-6 py-3 border ">
                  {task.description.slice(0, 40)} [...]
                </td>
                <td className="px-6 py-3 border ">{task.dueDate}</td>
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
            ))}
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

      {showTaskDetail && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <TaskDetail taskDetail={taskDetail} toggleTaskDetailModal={toggleTaskDetailModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskList;
