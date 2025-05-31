import React from 'react';

function ValidacaoFormulario() {
  const [dados, setDados] = React.useState({
    usuario: '',
    senha: ''
  });
  const [logado, setLogado] = React.useState(false);
  const [erro, setErro] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!dados.usuario.trim()) {
      setErro('Por favor, digite seu usuário');
      return;
    }
    setErro('');
    setLogado(true);
  };

  return (
    <div>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {logado ? (
        <p>Login bem-sucedido! Bem-vindo, {dados.usuario}!</p>
      ) : (
        <div>
          <input type="text" name="usuario" 
                 value={dados.usuario} onChange={handleChange} />
          <input type="password" name="senha" 
                 value={dados.senha} onChange={handleChange} />
          <button onClick={handleSubmit}>Entrar</button>
        </div>
      )}
    </div>
  );
}

export default ValidacaoFormulario;