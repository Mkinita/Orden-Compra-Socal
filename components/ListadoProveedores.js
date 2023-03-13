import React from 'react'
import Image from "next/image";


const ListadoProveedores = ({proveedor}) => {

    const { nombre,rut,direccion,fono,comuna } = proveedor;
  return (
    <div className="border p-1 w-full h-full">
      
      
      <div className='p-2 text-center'>
        <h3 className='text-lg font-extrabold'>{nombre}</h3>
        <p className='mt-1 font-black text-lg text-amber-500'>{rut}
        <h2 className='text-lg font-bold text-black'>{fono}</h2>
        <h2 className='text-lg font-bold text-black'>{comuna}</h2>
        </p>
        
      </div>
    </div>
  )
}

export default ListadoProveedores