import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Example() {
  const [folio, setFolio] = useState(0);

  function handleGenerateFolio() {
    setFolio(uuidv4());
  }

  return (
    <div>
      <p>Folio: {folio}</p>
      <button onClick={handleGenerateFolio}>Generate Folio</button>
      <p>Hola</p>
    </div>
    
  );
}


export default Example;
