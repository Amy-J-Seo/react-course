import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        currently counter value is <b>{value}</b>.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
}

export default Counter;
