import React, { useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    message: '',
    userName: '',
  });

  const onChangeText = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onClickBtn = () => {
    alert(form.userName + ', ' + form.message);
    setForm({
      message: '',
      userName: '',
    });
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') onClickBtn();
  };
  return (
    <div>
      <h1>Event!</h1>
      <input
        type="text"
        name="userName"
        placeholder="Enter username"
        value={form.userName}
        onChange={onChangeText}
      />
      <input
        type="text"
        name="message"
        placeholder="Enter anything"
        value={form.message}
        onChange={onChangeText}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClickBtn}>confirm</button>
    </div>
  );
};

export default EventPractice;
