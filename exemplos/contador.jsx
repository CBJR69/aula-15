import React from 'react';

function Contador() {
  const [contagem, setContagem] = React.useState(0);

  return (
    <div>
      <p>Você clicou {contagem} vezes</p>
      <button onClick={() => setContagem(contagem + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default Contador;