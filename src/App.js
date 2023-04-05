import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import DialogBox from "./components/DialogBox/DialogBox";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";

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

  return <RouterProvider router={router} />;
}

export default App;
