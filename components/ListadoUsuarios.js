import {useState } from "react"



const ListadoUsuarios = ({user}) => {


  const { email,password } = user;
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    
    <table class="w-full table-auto text-sm text-center">
        <tbody>
            <tr class="hover:bg-grey-lighter">
                <td class="py-2 px-4 border-b border-grey-light w-1/2">{email}</td>
                
                <button
                className="my-4"
                onClick={toggleVisibility}
                                
                >
                  {isVisible ? '👁️' : '🔐'}
                </button>

            {isVisible && (
              <td class="py-2 px-4 border-b border-grey-light w-1/2">{password}</td>

            )}
            </tr>
        </tbody>
    </table>
  )
}

export default ListadoUsuarios