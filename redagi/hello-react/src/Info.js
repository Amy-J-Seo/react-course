import React, { useState, useEffect } from 'react';

function Info() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('rendering finished!');
    console.log({
      name,
    });
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNicname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNicname} />
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
