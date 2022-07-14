import { useEffect } from 'react';
import { connect } from 'react-redux';

import { TodoListItem } from './TodoListItem';
import { loadTodos, markTodoAsCompletedRequest, removeTodoRequest } from './thunks';
import { getCompletedTodos, getIncompleteTodos, getTodosLoading } from './selectors';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

export const TodoList = ({
  completedTodos,
  incompleteTodos,
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos
}) => {
  const loadingMessage = <div>Loading todos...</div>
  const content = (
    <div className="list-wrapper">
      <NewTodoForm/>
      <h3>Incomplete:</h3>
      {incompleteTodos.map(todo => <TodoListItem
        todo={todo}
        key={todo.text}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed}
      />)}
      <h3>Completed:</h3>
      {completedTodos.map(todo => <TodoListItem
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
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
