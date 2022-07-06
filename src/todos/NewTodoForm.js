import { useState } from "react";
import './NewTodoForm.css';

export const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='new-todo-form'>
      <input
        type="text"
        className='new-todo-input'
        placeholder='Type your new Todo'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button className='new-todo-button'>Create Todo</button>
    </div>
  );
}