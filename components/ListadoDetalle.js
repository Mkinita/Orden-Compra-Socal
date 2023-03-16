import React from 'react'
import Image from "next/image";


const ListadoDetalle = ({descripcion}) => {

    const { nombre } = descripcion;
  return (
    <div className="border p-1 w-full h-full">
      
      
      <div className='p-2 text-center'>
        <h3 className='text-lg font-bold'>{nombre}</h3>        
      </div>
    </div>
  )
}

export default ListadoDetalle