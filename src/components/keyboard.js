import React from 'react';

function Keyboard({ onClick }) {
  const keys = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z',' '
  ];

  return (
    <div className="keyboard">
      {keys.map(key => (
        <button className='letter-button' key={key} onClick={() => onClick(key)}>
          {key}
        </button>
      ))}
    </div>
  );
}


export default Keyboard;
