// src/components/HelloWorld2.js
import React from 'react';

const HelloWorld2 = ({ time }) => {
  return (
    <div style={{ fontSize: '50px', fontFamily: 'cursive', color: 'blue' }}>
      <p>"Hello World!"</p>
      <p>Data e Hora: {time}</p>
    </div>
  );
};

export default HelloWorld2;
