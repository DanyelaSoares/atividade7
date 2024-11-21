import React, { useState, useEffect } from 'react';
import '../App.css'; 

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fazendo a requisição para uma API fictícia
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts') // API de exemplo
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar os dados!</p>;
  }

  return (
    <div>
      <h2>Dados Carregados da API</h2>
      <ul>
        {data.slice(0, 5).map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
