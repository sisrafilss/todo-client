import { useEffect } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const ErrorMessage = ({ showErrorMessage, setShowErrorMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowErrorMessage(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setShowErrorMessage]);
  return (
    <div
      className={`${
        showErrorMessage ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out bg-yellow-100 info text-yellow-700 px-4 py-3 rounded relative mx-auto`}
      role="alert"
    >
      <span className="block sm:inline">
        <ExclamationCircleIcon className="w-5 h-5 inline-block mr-2" />
        Something went wrong.
      </span>
    </div>
  );
};

export default ErrorMessage;
