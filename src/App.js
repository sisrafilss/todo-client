import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div>
      <Header />
      {/* <AddTask /> */}
      <TaskList />
    </div>
  );
}

export default App;
