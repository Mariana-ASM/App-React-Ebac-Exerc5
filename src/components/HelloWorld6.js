// src/components/HelloWorld5.js
import React from 'react';

const HelloWorld5 = ({ time }) => {
  return (
    <div style={{ fontSize: '40px', fontStyle: 'italic', color: 'red' }}>
      <p>"Hello World!"</p>
      <p>Data e Hora: {time}</p>
    </div>
  );
};

export default HelloWorld5;
