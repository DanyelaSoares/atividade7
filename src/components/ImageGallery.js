/*
import React from 'react';

const ImageGallery = () => {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150/0000FF/808080',
    'https://via.placeholder.com/150/FF0000/FFFFFF',
    'https://via.placeholder.com/150/FFFF00/000000',
    'https://via.placeholder.com/150/00FF00/000000',
  ];

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`imagem ${index + 1}`} style={{ width: '150px', height: '150px', margin: '10px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
*/

import React from 'react';
import '../App.css'; 

const ImageGallery = () => {
  const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150/0000FF/808080',
    'https://via.placeholder.com/150/FF0000/FFFFFF',
    'https://via.placeholder.com/150/FFFF00/000000',
    'https://via.placeholder.com/150/00FF00/000000',
  ];

  // Define os estilos diretamente no componente
  const galleryStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap', // Para que as imagens se ajustem em múltiplas linhas, se necessário
  };

  const imageStyles = {
    width: '150px',
    height: '150px',
    margin: '10px',
    borderRadius: '8px', // Exemplo de borda arredondada
  };

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={galleryStyles}>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`imagem ${index + 1}`} style={imageStyles} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
