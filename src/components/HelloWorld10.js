// src/components/HelloWorld2.js
import React from 'react';

const HelloWorld2 = ({ time }) => {
  return (
    <div style={{ fontSize: '38px', fontFamily: 'fantasy', color: 'gold' }}>
      <p>"Hello World!"</p>
      <p>Data e Hora: {time}</p>
    </div>
  );
};

export default HelloWorld2;
