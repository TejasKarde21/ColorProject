import React from 'react';

export default function Card(props) {
  const { color, hashcode, colorName } = props.obj;

  return (
    <div className='shadow-xl w-[200px] h-[300px] m-10 pb-3'>
      <div
        className="w-full h-[70%] border-2"
        style={{ backgroundColor: color }}
      >
      </div>
      <div>
        <h1 className='p-3 font-bold'>{hashcode}</h1>
        <p className='px-5 font-bold' style={{ color: color }}>{colorName}</p>
      </div>
    </div>
  );
}
