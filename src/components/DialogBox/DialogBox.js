import React from "react";

const DialogBox = ({ toggleDialogBox }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-gray-600 opacity-50"></div>
      <div className="bg-white rounded-lg shadow-lg p-6 mx-2 md:mx-auto">
        <h2 className="text-xl font-bold mb-4">Are you sure?</h2>
        <p className="text-gray-700 mb-4">Want to delete the selected task?</p>
        <div className="flex justify-around">
          <button
            className="px-4 py-2 rounded-lg border border-gray-400 text-gray-700 font-semibold"
              onClick={toggleDialogBox}
          >
            No
          </button>
          <button
            className="px-4 py-2 mr-4 rounded-lg bg-red-600 text-white font-semibold"
            //   onClick={onDelete}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
