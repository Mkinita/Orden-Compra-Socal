import React from 'react'
import Image from "next/image";
import useCombustible from '../hooks/useCombustible';

const Equipo = ({equipo}) => {

  const {handlesetEquipo, handleChangeModal} =useCombustible()
  const { titulo, imagen, patente } = equipo;
  
  
  return (
    <div className="border p-3 w-full h-full">
      <Image
      className='w-40 h-32 m-auto'
        src={`/assets/img/${imagen}`}
        alt={`Imagen${titulo}`}
        width={250}
        height={100}
      />
      <div className='p-5 text-center'>
        <p className='mt-1 font-black text-lg text-black'>{patente}</p>
        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-2 p-2 uppercase font bold text-sm border rounded-xl'
          onClick={()=> {
          handleChangeModal();
          handlesetEquipo(equipo)
          }}
        >
          Generar O.C.
        </button>
      </div>
    </div>
  )
}

export default Equipo