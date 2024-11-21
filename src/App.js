import React, { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';
import BackgroundColor from './components/BackgroundColor';
import CountdownTimer from './components/CountdownTimer';
import RegistrationForm from './components/RegistrationForm';
import DataFetcher from './components/DataFetcher'; 
import ImageGallery from './components/ImageGallery'; 
import TimerWithAlert from './components/TimerWithAlert';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';


function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');  // Defina a cor inicial

  // useEffect para atualizar o fundo
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]); // A dependência é a cor de fundo

  return (
    <div className="App">
      <header className="App-header">
        <h1>Atividade 7 - Contador </h1>
        <Counter />
        <BackgroundColor setBackgroundColor={setBackgroundColor} /> {/* Passando a função para o componente BackgroundColor */}
        <CountdownTimer />
        <RegistrationForm />
        <DataFetcher /> 
        <ImageGallery /> 
        <TimerWithAlert />
        <Tabs />
        <TodoList />
      </header>
    </div>
  );
}

export default App; 