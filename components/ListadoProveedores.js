import React from 'react'
import Image from "next/image";


const ListadoProveedores = ({proveedor}) => {

    const { nombre,rut,direccion,fono,comuna } = proveedor;
  return (
    <>
    


    <table class="w-full table-auto text-sm">
       
        <tbody>
            <tr class="hover:bg-grey-lighter">
                <td class="py-2 px-4 border-b border-grey-light w-1/3">{nombre}</td>
                <td class="py-2 px-4 border-b border-grey-light w-1/3">{rut}</td>
                <td class="py-2 px-4 border-b border-grey-light w-1/3">{fono}</td>
            </tr>
        </tbody>
    </table>
    
    
    
    </>
  )
}

export default ListadoProveedores