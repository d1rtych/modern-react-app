import { connect } from "react-redux";

import { TodoListItem } from "./TodoListItem";
import { markTodoAsCompleted, removeTodo } from "./actions";
import NewTodoForm from "./NewTodoForm";
import './TodoList.css';

export const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
  <div className='list-wrapper'>
    <NewTodoForm />
    {todos.map(todo => <TodoListItem
      todo={todo}
      key={todo.text}
      onRemovePressed={onRemovePressed}
      onCompletedPressed={onCompletedPressed}
    />)}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
