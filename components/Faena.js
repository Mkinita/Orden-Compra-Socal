import React from 'react'
import useCombustible from '../hooks/useCombustible';

const Faena = ({faena}) => {

    const { nombre, imagen, patente } = faena;
  return (
    <div className="border p-3">
    
      <div className='p-5 text-center'>
        <p className='mt-1 font-black text-sm text-black'>
            {nombre}
        </p>
      </div>
    </div>
  )
}

export default Faena