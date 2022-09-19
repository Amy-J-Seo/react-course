import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

function TodoInsert({ addTodoFn, onInsert }) {
  const [newTodo, setNewTodo] = useState('');

  const addNewTodoHandler = (e) => {
    setNewTodo(e.target.value);
  };
  const addItem = () => {
    addTodoFn(newTodo);
    setNewTodo('');
  };

  const onChange = useCallback((e) => {
    setNewTodo(e.target.value);
  }, []);

  const onSubmit = useCallback((e) => {
    onInsert(newTodo);
    setNewTodo('');
    e.preventDefault();
  });

  return (
    <form className="TodoInputWrapper" onSubmit={onSubmit}>
      <input
        className="todoInput"
        placeholder="할 일을 입력하세요"
        value={newTodo}
        onChange={addNewTodoHandler}
      />
      <button
        // onClick={addItem}
        type="submit"
      >
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
