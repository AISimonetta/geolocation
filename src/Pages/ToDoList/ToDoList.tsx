import React, { useState, ChangeEventHandler, MouseEventHandler } from 'react';
import SideBar from '../../Layout/SideBar/SideBar';
import AddTask from '../../Components/AddTask/AddTask';
import ResetBtn from '../../Components/ResetBtn/ResetBtn';
import './ToDoList.scss';

const ToDoList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleReset: MouseEventHandler<HTMLButtonElement> = () => {
    setTasks([]);
    setInputValue('');
  };

  const handleTaskChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const handleTaskInput: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    if (inputValue !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    } else {
      alert('Please enter todo');
    }
  };

  return (
    <div className='toDo'>
      <SideBar />
      <div className='toDo__container'>
        <h1>Today (seehow to put current date), I need to ...</h1>
        <div>
          <ResetBtn handleReset={handleReset} />
          <AddTask inputValue={inputValue} handleTaskChange={handleTaskChange} handleTaskInput={handleTaskInput} />
        </div>
      </div>
    </div>
  );
};

export default ToDoList;