/*
import React, { useState, useEffect } from 'react';

const TimerWithAlert = () => {
  const [seconds, setSeconds] = useState(0);  // Iniciar com 0, mas sem começar o timer imediatamente
  const [isRunning, setIsRunning] = useState(false);

  // Função que dispara o alerta quando o tempo chega a 0
  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0 && isRunning) {
      alert("O tempo acabou!"); // Só dispara o alerta quando o timer estiver em execução
      setIsRunning(false); // Para o timer automaticamente
    }

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [isRunning, seconds]);

  const startTimer = () => {
    if (seconds > 0) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h2>Timer com Alerta</h2>
      <div>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          disabled={isRunning}
        />
        <button onClick={startTimer} disabled={isRunning || seconds <= 0}>Iniciar</button>
        <button onClick={stopTimer} disabled={!isRunning}>Parar</button>
        <button onClick={resetTimer}>Resetar</button>
      </div>
      <div>
        <p>{seconds} segundos restantes</p>
      </div>
    </div>
  );
};

export default TimerWithAlert;
*/

import React, { useState, useEffect } from 'react';
import '../App.css'; 

const TimerWithAlert = () => {
  const [seconds, setSeconds] = useState(10);  // Defina o valor inicial como 10 segundos
  const [isRunning, setIsRunning] = useState(false);

  // Função que dispara o alerta quando o tempo chega a 0
  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0 && isRunning) {
      alert("O tempo acabou!"); // Dispara o alerta quando o tempo chega a zero
      setIsRunning(false); // Para o timer automaticamente
    }

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado ou quando o timer é pausado
  }, [isRunning, seconds]);

  const startTimer = () => {
    if (seconds > 0) {
      setIsRunning(true); // Começa o timer se houver tempo restante
    }
  };

  const stopTimer = () => {
    setIsRunning(false); // Para o timer
  };

  const resetTimer = () => {
    setSeconds(10); // Reseta o timer para 10 segundos
    setIsRunning(false); // Para o timer
  };

  return (
    <div>
      <h2>Timer com Alerta</h2>
      <div>
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          disabled={isRunning}  // Desabilita o campo enquanto o timer estiver em execução
        />
        <button onClick={startTimer} disabled={isRunning || seconds <= 0}>Iniciar</button>
        <button onClick={stopTimer} disabled={!isRunning}>Parar</button>
        <button onClick={resetTimer}>Resetar</button>
      </div>
      <div>
        <p>{seconds} segundos restantes</p>
      </div>
    </div>
  );
};

export default TimerWithAlert;
