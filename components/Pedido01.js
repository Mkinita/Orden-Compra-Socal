import React from 'react'
import Image from "next/image";
import useCombustible from '../hooks/useCombustible';

const Proveedor = ({proveedor}) => {


  

    const {handlesetProveedor, handleChangeModal} =useCombustible()
    const { nombre,rut } = proveedor;
  return (
    <div className="border p-1 w-full h-full">
      
      
      <div className='p-2 text-center'>
        <h3 className='text-lg font-bold'>{nombre}</h3>
        <p className='mt-1 font-black text-lg text-amber-500'>
            {rut}
        </p>
        <button
            type='button'
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font bold text-sm'
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