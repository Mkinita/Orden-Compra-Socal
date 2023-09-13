import Link from "next/link"
import { useEffect, useCallback, useState } from "react"
import Image from "next/image";

export const SidebarAdminGeneral = () => {

   const [isVisible, setIsVisible] = useState(false);
   const [isVisible1, setIsVisible1] = useState(false);
   const [isVisible2, setIsVisible2] = useState(false);
      
   const toggleVisibility = () => {
     setIsVisible(!isVisible);
   };

   const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };


  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };


    return (
      <>
      
      <div className="px-3 py-4 overflow-y-auto rounded bg-white">
        <ul className="space-y-2">

               <li>
               <Link href="/tablero-admin" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  🏠
               <  span className="ml-3 md:block hidden">Inicio</span>
               </Link>
            </li>
            
               <li>
                  <Link href="https://socal-production.up.railway.app/auth/login" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                     ⚠️
                  <  span className="ml-3">Cerrar Sesion</span>
                  </Link>
               </li>
           
        </ul>



        </div>
        </>
    )
  }
  
  
  export default SidebarAdminGeneral