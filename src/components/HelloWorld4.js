// src/components/HelloWorld4.js
import React from 'react';

const HelloWorld4 = ({ time }) => {
  return (
    <div style={{ fontSize: '25px', color: 'orange', textTransform: 'uppercase' }}>
      <p>"Hello World!"</p>
      <p>Data e Hora: {time}</p>
    </div>
  );
};

export default HelloWorld4;
