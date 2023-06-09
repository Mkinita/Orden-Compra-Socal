import React from 'react'
import Image from "next/image";
import useCombustible from '../hooks/useCombustible';


const OrdenGeneralPendienteCombustible = ({orden}) => {
    const {id,emisor, obra,estado,
    
    } = orden
  return (
   
    <>
    
    <div className=''>
      <div className="border p-5 space-y-2 ">
        <div className=''></div>
        <div className=' border-b last-of-type:border-0 items-center'>
          <h3 className="text-xl font-bold">Nº O.C: {id}</h3>
          <p className="text-sm font-bold">Emisor: {emisor}</p>
          <p className="text-sm font-bold ">Obra: {obra}</p>
          <p className="text-sm font-bold ">Estado: {estado ? "Autorizado 🔓✔️" : "Pendiente 🔒⏱"}</p>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default OrdenGeneralPendienteCombustible