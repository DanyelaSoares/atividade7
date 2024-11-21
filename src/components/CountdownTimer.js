import React, { useState, useEffect } from 'react';
import '../App.css'; 

const CountdownTimer = () => {
  // useState para armazenar o tempo restante e o status do timer (ativo ou não)
  const [timeLeft, setTimeLeft] = useState(10); // inicializa com 10 segundos
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {  //tualiza o tempo a cada segundo, criando um intervalo quando o timer está ativo. Se o tempo atingir 0, o intervalo é limpo
    let interval;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    } else if (timeLeft === 0) {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval); // limpa o intervalo quando o componente é desmontado
  }, [isActive, timeLeft]); // Executa o useEffect quando isActive ou timeLeft mudarem

  // Função para alternar o estado do timer
  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  // Função para resetar o timer
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(10); // Resetando para 10 segundos
  };

  return (
    <div>
      <h2>Timer: {timeLeft}s</h2>
      <button onClick={toggleTimer}>
        {isActive ? 'Parar' : 'Iniciar'}
      </button>
      <button onClick={resetTimer}>Resetar</button>
    </div>
  );
};

export default CountdownTimer;
