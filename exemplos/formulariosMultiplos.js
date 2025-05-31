import React from 'react';

function FormularioMultiplos() {
  const [dadosForm, setDadosForm] = React.useState({ 
    nome: '', 
    email: '' 
  });
  
  const lidarComMudanca = (evento) => {
    const { name, value } = evento.target;
    setDadosForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  return (
    <form>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" 
               value={dadosForm.nome} onChange={lidarComMudanca} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" 
               value={dadosForm.email} onChange={lidarComMudanca} />
      </div>
      <p>Nome: {dadosForm.nome}, Email: {dadosForm.email}</p>
    </form>
  );
}

export default FormularioMultiplos;