import React, { useState, useEffect } from 'react';
import '../App.css'; 

const BackgroundColor = () => {
  // Função para gerar uma cor aleatória em formato hexadecimal
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // useState para armazenar a cor do fundo
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  // useEffect para atualizar o estilo do fundo sempre que a cor mudar
  useEffect(() => {
    console.log('Cor gerada:', backgroundColor); // Verifique a cor gerada no console
    // Atualizando o estilo de fundo diretamente no body
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]); // A dependência é a cor de fundo

  return (
    <div>
      <button onClick={() => setBackgroundColor(generateRandomColor())}>
        Mudar Cor de Fundo
      </button>
    </div>
  );
};

export default BackgroundColor;
