import React from "react";
import "./TaskList.css";
import update from "../../img/edit.png";
import dlete from "../../img/delete.png";

const TaskList = () => {
  return (
    <div className="w-2/3 mx-auto mt-16">
      <div className="flex justify-between ">
        <h2 className="text-2xl font-bold">Task List</h2>
        <button className="px-2 py-2 bg-slate-600 text-white rounded font-medium text-base">
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
              />
              <img
                className="w-6 h-6 cursor-pointer "
                src={dlete}
                alt=""
                title="Delete"
              />
            </td>
          </tr>
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
              />
              <img
                className="w-6 h-6 cursor-pointer "
                src={dlete}
                alt=""
                title="Delete"
              />
            </td>
          </tr>
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
              />
              <img
                className="w-6 h-6 cursor-pointer "
                src={dlete}
                alt=""
                title="Delete"
              />
            </td>
          </tr>
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
              />
              <img
                className="w-6 h-6 cursor-pointer "
                src={dlete}
                alt=""
                title="Delete"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
