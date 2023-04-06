import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

const SuccessMessage = ({ showSuccessMessage, setShowSuccessMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setShowSuccessMessage]);

  return (
    <div
      className={`${
        showSuccessMessage ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative w-96 mx-auto`}
      role="alert"
    >
      <span className="block sm:inline">
        <CheckCircleIcon className="w-5 h-5 inline-block mr-2" />
        Success!
      </span>
    </div>
  );
};

export default SuccessMessage;
