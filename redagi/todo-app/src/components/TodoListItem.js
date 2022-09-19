import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

function TodoListItem(props) {
  const { content, checked, id } = props.todo;
  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => props.onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{content}</div>
      </div>
      <div className="remove" onClick={() => props.removeItem(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
}

export default TodoListItem;
