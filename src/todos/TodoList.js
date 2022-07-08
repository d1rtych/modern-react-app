import { useEffect } from "react";
import { connect } from "react-redux";

import { TodoListItem } from "./TodoListItem";
import { loadTodos, markTodoAsCompletedRequest, removeTodoRequest } from "./thunks";
import NewTodoForm from "./NewTodoForm";
import './TodoList.css';

export const TodoList = (
  { todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }
) => {
  const loadingMessage = <div>Loading todos...</div>
  const content = (
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

  useEffect(() => {
    startLoadingTodos();
  }, []);

  return isLoading ? loadingMessage : content;
}

const mapStateToProps = state => ({
  todos: state.todos,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
