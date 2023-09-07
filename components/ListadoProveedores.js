import {useState } from "react"


const ListadoProveedores = ({proveedor}) => {

    const { nombre,rut,direccion,fono,comuna } = proveedor;

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };


  return (
    <>
    


    <table class="w-full table-auto text-sm">
       
        <tbody>
            <tr class="hover:bg-grey-lighter">
                <td class="py-2 px-4 border-b border-grey-light w-1/3">{nombre}</td>

                {/* <button
                className="my-"
                onClick={toggleVisibility}
                                
                >
                  {isVisible ? '👁️' : '🔐'}
                </button> */}
               
                <td class="py-2 px-4 border-b border-grey-light w-1/3">{rut}</td>
               
            </tr>
        </tbody>
    </table>
    
    
    
    </>
  )
}

export default ListadoProveedores