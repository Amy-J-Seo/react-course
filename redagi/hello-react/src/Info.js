import React, { useReducer } from 'react';

function reducer(state, action) {
  console.log('state and action', state, 'llll', action);
  return {
    ...state,
    [action.name]: action.value,
  };
}

function Info() {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    console.log('e.target', e.target);
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input
          type="text"
          name="nickname"
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <div>
          <b>name:</b> {name}
        </div>
        <div>
          <b>nickname:</b> {nickname}
        </div>
      </div>
    </div>
  );
}

export default Info;
