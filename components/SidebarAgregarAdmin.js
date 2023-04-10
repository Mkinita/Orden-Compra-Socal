import Link from "next/link"


export const SidebarAdmin = () => {
    return (
      <div className="px-3 py-4 overflow-y-auto rounded bg-white">
        <ul className="space-y-2">


         
           <li>
              <Link href="/autorizar" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⛽
                  <span className="ml-3">Orden De Compra ⛽</span>
              </Link>
           </li>

           <li>
              <Link href="/autorizarordengeneraladminprueba" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                    📃
                  <span className="ml-3">Orden De Compra 📃</span>
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
    )
  }
  
  
  export default SidebarAdmin