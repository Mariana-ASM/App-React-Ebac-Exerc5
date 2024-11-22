// src/App.js
import React, { useState, useEffect } from 'react';
import HelloWorld1 from './components/HelloWorld1';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld5 from './components/HelloWorld5';
import HelloWorld6 from './components/HelloWorld6';
import HelloWorld7 from './components/HelloWorld7';
import HelloWorld8 from './components/HelloWorld8';
import HelloWorld9 from './components/HelloWorld9';
import HelloWorld10 from './components/HelloWorld10';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      });
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000); // Atualiza a cada segundo

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <HelloWorld1 time={time} />
      <HelloWorld2 time={time} />
      <HelloWorld3 time={time} />
      <HelloWorld4 time={time} />
      <HelloWorld5 time={time} />
      <HelloWorld6 time={time} />
      <HelloWorld7 time={time} />
      <HelloWorld8 time={time} />
      <HelloWorld9 time={time} />
      <HelloWorld10 time={time} />
    </div>
  );
}

export default App;
