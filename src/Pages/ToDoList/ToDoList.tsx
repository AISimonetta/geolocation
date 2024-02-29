import {
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
} from "react";
import SideBar from "../../Layout/SideBar/SideBar";
import AddTask from "../../Components/AddTask/AddTask";
import ResetBtn from "../../Components/ResetBtn/ResetBtn";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import { Trash } from "lucide-react";
import "./ToDoList.scss";

const ToDoList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [checkedTasks, setCheckedTasks] = useState<string[]>([]);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(getDate());
  }, []);

  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  };

  const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
    setTasks([]);
    setInputValue("");
  };

  const handleTaskChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleTaskInput: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    if (inputValue !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    } else {
      alert("Please enter a task");
    }
  };

  const handleDeleteBtn: MouseEventHandler<HTMLButtonElement> = (event) => {
    const taskKey = event.currentTarget.getAttribute("data-task-key");
    if (taskKey) {
      setTasks(tasks.filter((task) => task !== taskKey));
    }
  };

  const handleCompletededTask: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const taskKey = event.currentTarget.getAttribute("data-task-key");

    if (taskKey) {
      setCheckedTasks((prevCheckedTasks) => {
        if (prevCheckedTasks.includes(taskKey)) {
          return prevCheckedTasks.filter((task) => task !== taskKey);
        } else {
          return [...prevCheckedTasks, taskKey];
        }
      });
    }
  };

  return (
    <div className="toDo">
      <Header/>
      <SideBar />
      <div className="toDo__container--one">
        <h1>Today: {currentDate}, I need to ...</h1>
        <div className="toDo__container--two">
          <AddTask
            inputValue={inputValue}
            handleTaskChange={handleTaskChange}
            handleTaskInput={handleTaskInput}
          />
          <ResetBtn handleReset={handleReset} />
        </div>
        <div className="toDo__tasks">
          <ul className="toDo__taskList">
            {tasks.map((task) => (
              <li
                className={`toDo__taskItem ${
                  checkedTasks.includes(task) ? "completedTask" : ""
                }`}
                key={task}
              >
                <input
                  onChange={handleCompletededTask}
                  className="toDo__inputCheckbox"
                  type="checkbox"
                  data-task-key={task}
                />
                {task}
                <button
                  onClick={handleDeleteBtn}
                  className="toDo__deleteBtn"
                  data-task-key={task}
                >
                  <Trash className="trash" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ToDoList;
