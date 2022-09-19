import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

function TodoList({ todos, removeHandler, onToggle }) {
  return (
    <ul className="ListWrapper">
      {todos.map((el) => (
        <TodoListItem
          todo={el}
          key={el.id}
          removeItem={removeHandler}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default React.memo(TodoList);
