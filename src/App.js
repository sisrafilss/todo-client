import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import DialogBox from "./components/DialogBox/DialogBox";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div>
      <Header />
      {/* <AddTask /> */}
      <TaskList />
      {/* <DialogBox /> */}
    </div>
  );
}

export default App;
