// src/components/HelloWorld3.js
import React from 'react';

const HelloWorld3 = ({ time }) => {
  return (
    <div style={{ fontSize: '40px', color: 'green', fontWeight: 'bold' }}>
      <p>"Hello World!"</p>
      <p>Data e Hora: {time}</p>
    </div>
  );
};

export default HelloWorld3;
