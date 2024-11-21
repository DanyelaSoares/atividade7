import React, { useState } from "react";
import '../App.css'; 

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // Estado para erros
  const [successMessage, setSuccessMessage] = useState(""); // Estado para mensagem de sucesso

  // Função para validar o formulário
  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Nome é obrigatório";
    if (!email) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido";
    }
    if (!password) newErrors.password = "Senha é obrigatória";
    else if (password.length < 6) {
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
    setSuccessMessage(""); // Reseta a mensagem de sucesso
    if (Object.keys(formErrors).length === 0) {
      // Simula o envio bem-sucedido
      setSuccessMessage("Formulário enviado com sucesso!");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <h2>Formulário de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Registrar</button>
      </form>
      
      {/* Exibe mensagem de sucesso após envio */}
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
};

export default RegistrationForm;
