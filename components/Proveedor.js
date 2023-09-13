import React from 'react'
import Image from "next/image";
import useCombustible from '../hooks/useCombustible';

const Proveedor = ({proveedor}) => {


  

    const {handlesetProveedor, handleChangeModal} =useCombustible()
    const { nombre,rut } = proveedor;
  return (
    <div className="p-1 w-full h-full shadow rounded-lg">
      
      
      <div className='p-2 text-center'>
        <h3 className='text-sm font-bold'>{nombre}</h3>
        <p className='mt-1 font-black text-sm text-amber-500'>
            {rut}
        </p>
        <button
            type='button'
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-1/2 mt-5 p-3 uppercase font bold text-sm rounded-lg'
            onClick={()=> {
              handleChangeModal();
              handlesetProveedor(proveedor)
            }}
        >
            Generar O.C.
        </button>
      </div>
    </div>
  )
}

export default Proveedor