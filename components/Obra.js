import React from 'react'
import Image from "next/image";
import useCombustible from '../hooks/useCombustible';

const Obra = ({obra}) => {


  

    const {handlesetObra, handleChangeModal} =useCombustible()
    const { nombre,cantidad } = obra;
  return (
    <div className="border p-1 w-full h-full">
      
      
      <div className='p-2 text-center'>
        <h3 className='text-lg font-bold'>{nombre}</h3>
        <p className='mt-1 font-black text-lg text-amber-500'>
            {cantidad} Litros
        </p>
        <button
            type='button'
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font bold text-sm'
            onClick={()=> {
              handleChangeModal();
              handlesetObra(obra)
            }}
        >
            Generar O.C.
        </button>
      </div>
    </div>
  )
}

export default Obra