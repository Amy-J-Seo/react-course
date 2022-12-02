import React from 'react';

const TodosItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>Delete</button>
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
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (e) => onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={input} />
        <button type="submit">Register</button>
      </form>
      <div>
        {todos.map((el) => {
          return (
            <TodosItem
              todo={el}
              key={el.id}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
