import React from 'react';

const TodosItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>Sample text</span>
      <button>Delete</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit">Register</button>
      </form>
      <div>
        <TodosItem />
        <TodosItem />
        <TodosItem />
        <TodosItem />
        <TodosItem />
        <TodosItem />
        <TodosItem />
      </div>
    </div>
  );
};

export default Todos;
