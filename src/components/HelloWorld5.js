// src/components/HelloWorld5.js
import React from 'react';

const HelloWorld5 = ({ time }) => {
  return (
    <div style={{ fontSize: '35px', fontStyle: 'fantasy', color: 'purple' }}>
      <p>"Hello World!"</p>
      <p>Data e Hora: {time}</p>
    </div>
  );
};

export default HelloWorld5;
