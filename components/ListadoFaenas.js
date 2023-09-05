import React from 'react'
import Image from "next/image";


const ListadoProveedores = ({faenas}) => {

    const { nombre,rut,direccion,fono,comuna } = faenas;
  return (
    <>
    


    <table class="w-full table-auto text-sm">
       
        <tbody>
            <tr class="hover:bg-grey-lighter">
                <td class="py-2 px-4 border-b border-grey-light">{nombre}</td>
            </tr>
        </tbody>
    </table>
    
    
    
    </>
  )
}

export default ListadoProveedores