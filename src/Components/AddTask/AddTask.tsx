import { ChangeEventHandler, MouseEventHandler } from 'react';

type AddTaskProps = {
    inputValue: string;
    handleTaskChange: ChangeEventHandler<HTMLInputElement>;
    handleTaskInput: MouseEventHandler<HTMLButtonElement>;
  }

const AddTask = ({inputValue, handleTaskChange, handleTaskInput}:AddTaskProps) => {
  return (
    <div className='addTaskContainer'>
    <div >
      <input
        type="text"
        value={inputValue}
        className="addTask__input"
        placeholder="Add your task here.."
        onChange={handleTaskChange}
      />
      <button className="addTask__btn" onClick={handleTaskInput}>+</button>
    </div>
  </div>
  )
}

export default AddTask