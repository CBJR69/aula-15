import React from 'react';

function ToggleTexto() {
  const [mostrar, setMostrar] = React.useState(false);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar Texto' : 'Mostrar Texto'}
      </button>
      {mostrar && <p>Este texto é visível apenas quando mostrar é true</p>}
    </div>
  );
}

export default ToggleTexto;