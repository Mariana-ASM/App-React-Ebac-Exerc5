// src/components/HelloWorld5.js
import React from 'react';

const HelloWorld5 = ({ time }) => {
  return (
    <div style={{ fontSize: '39px', fontStyle: 'serif', color: 'black' }}>
      <p>"Hello World!"</p>
      <p>Data e Hora: {time}</p>
    </div>
  );
};

export default HelloWorld5;
