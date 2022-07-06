import { TodoListItem } from "./TodoListItem";
import { NewTodoForm } from "./NewTodoForm";
import './TodoList.css';

export const TodoList = ({ todos = [] }) => (
  <div className='list-wrapper'>
    <NewTodoForm />
    {todos.map(todo => <TodoListItem todo={todo} />)}
  </div>
);