import React, { useState } from 'react';

const EventPractice = () => {
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const onChangeUserName = (e) => setUserName(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClickBtn = () => {
    alert(userName + ', ' + message);
    setUserName('');
    setMessage('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onclick();
  };
  return (
    <div>
      <h1>Event!</h1>
      <input
        type="text"
        name="userName"
        placeholder="Enter username"
        value={userName}
        onChange={onChangeUserName}
      />
      <input
        type="text"
        name="message"
        placeholder="Enter anything"
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClickBtn}>confirm</button>
      <h2>{message}</h2>
    </div>
  );
};

export default EventPractice;
