import React from 'react'



const ListadoUsuarios = ({user}) => {

    const { email,rut,direccion,fono,comuna } = user;
  return (
    <div className="border p-1 w-full h-full">
      
      
      <div className='p-2 text-center'>
        <h3 className='text-lg font-extrabold'>{email}</h3>
        
        
      </div>
    </div>
  )
}

export default ListadoUsuarios