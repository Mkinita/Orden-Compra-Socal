import React from 'react'



const ListadoUsuarios = ({user}) => {

    const { email,password } = user;
  return (
    <table class="w-full table-auto text-sm">
       
        <tbody>
            <tr class="hover:bg-grey-lighter">
                <td class="py-2 px-4 border-b border-grey-light w-1/2">{email}</td>
                <td class="py-2 px-4 border-b border-grey-light w-1/2">{password}</td>
            </tr>
        </tbody>
    </table>
  )
}

export default ListadoUsuarios