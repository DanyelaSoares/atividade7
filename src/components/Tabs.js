
import React, { useState } from 'react';
import '../App.css'; 


const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);  // Estado para acompanhar qual aba está ativa

  const switchTab = (tabNumber) => {
    setActiveTab(tabNumber);  // Altera o estado quando uma aba é clicada
  };

  return (
    <div>
      <h2>Tabs Navegáveis</h2>
      <div>
        {/* Botões para mudar de aba, a classe 'active' será aplicada ao botão clicado*/ }
        <button
          onClick={() => switchTab(1)}
          className={activeTab === 1 ? 'active' : ''}  // Classe ativa se for a aba 1
        >
          Tab 1
        </button>
        <button
          onClick={() => switchTab(2)}
          className={activeTab === 2 ? 'active' : ''}  // Classe ativa se for a aba 2
        >
          Tab 2
        </button>
        <button
          onClick={() => switchTab(3)}
          className={activeTab === 3 ? 'active' : ''}  // Classe ativa se for a aba 3
        >
          Tab 3
        </button>
      </div>
      <div className="tab-content">
        {/* Conteúdo exibido de acordo com a aba ativa*/ }
        {activeTab === 1 && <p>Conteúdo da Tab 1</p>}
        {activeTab === 2 && <p>Conteúdo da Tab 2</p>}
        {activeTab === 3 && <p>Conteúdo da Tab 3</p>}
      </div>
    </div>
  );
};

export default Tabs;
