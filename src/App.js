import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import DialogBox from "./components/DialogBox/DialogBox";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
  ]);

  return (
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
