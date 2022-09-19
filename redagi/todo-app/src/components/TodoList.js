import React, { useCallback } from 'react';
import './TodoList.scss';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';

function TodoList({ todos, removeHandler, onToggle }) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      console.log('checking index', index, '=== checking todo===', todo);
      return (
        <TodoListItem
          todo={todo}
          key={key}
          //   removeItem={removeHandler}
          //   onToggle={onToggle}
          //   style={style}
        />
      );
    },
    [removeHandler, onToggle, todos],
  );

  return (
    <List
      className="ListWrapper"
      width={512} //total width of the list
      height={513} //total height of the list
      rowCount={todos.length} //num of the todos
      rowHeight={57} //one item height
      rowRenderer={rowRenderer} //function that is used for the rendering
      list={todos}
      //   style={{ outline: 'none' }} //default outline style removed
    />

    // <ul className="ListWrapper">
    //   {todos.map((el) => (
    //     <TodoListItem
    //       todo={el}
    //       key={el.id}
    //       removeItem={removeHandler}
    //       onToggle={onToggle}
    //     />
    //   ))}
    // </ul>
  );
}

export default React.memo(TodoList);
