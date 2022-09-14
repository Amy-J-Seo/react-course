import React, { useState } from 'react';

function IterationSample() {
  const [names, setNames] = useState([
    { id: 1, name: 'snowman' },
    { id: 2, name: 'ice' },
    { id: 3, name: 'snow' },
    { id: 4, name: 'wind' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChangeText = (e) => setInputText(e.target.value);
  const onAddBtnClicked = () => {
    const nextNames = [...names, { id: nextId, name: inputText }];
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText('');
  };
  const onRemoveItem = (id) => {
    const newNames = names.filter((el) => el.id !== id);
    setNames(newNames);
  };
  const nameList = names.map((el) => (
    <li key={el.id} onDoubleClick={() => onRemoveItem(el.id)}>
      {el.name}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChangeText} />
      <button onClick={onAddBtnClicked}>Add</button>
      <ul>{nameList}</ul>
    </>
  );
}

export default IterationSample;
