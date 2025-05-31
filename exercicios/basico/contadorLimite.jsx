import React from 'react';

function ContadorLimite() {
  const [contagem, setContagem] = React.useState(0);

  return (
    <div>
      <p>Contagem: {contagem}</p>
      {contagem < 10 && (
        <button onClick={() => setContagem(contagem + 1)}>
          Incrementar
        </button>
      )}
    </div>
  );
}

export default ContadorLimite;