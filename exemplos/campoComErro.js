import React from 'react';

function CampoComErro({ erro }) {
  return (
    <div>
      <input type="text" />
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  );
}

export default CampoComErro;