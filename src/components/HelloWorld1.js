// src/components/HelloWorld1.js
import React from 'react';

const HelloWorld1 = ({ time }) => {
  return (
    <div style={{ fontSize: '30px', color: 'red' }}>
      <p>"Hello World!"</p>
      <p>Data e Hora: {time}</p>
    </div>
  );
};

export default HelloWorld1;
