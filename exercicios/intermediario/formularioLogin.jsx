import React from 'react';

function FormularioLogin() {
  const [dados, setDados] = React.useState({
    usuario: '',
    senha: ''
  });
  const [logado, setLogado] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setLogado(true);
  };

  return logado ? (
    <p>Bem-vindo, {dados.usuario}!</p>
  ) : (
    <div>
      <input type="text" name="usuario" 
             value={dados.usuario} onChange={handleChange} />
      <input type="password" name="senha" 
             value={dados.senha} onChange={handleChange} />
      <button onClick={handleSubmit}>Entrar</button>
    </div>
  );
}

export default FormularioLogin;