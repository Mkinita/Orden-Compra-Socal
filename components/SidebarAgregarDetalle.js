import Link from "next/link"


export const SidebarAgregarDetalle = () => {
    return (
      <div className="px-3 py-4 overflow-y-auto rounded bg-white">
        <ul className="space-y-2">


         
           <li>
              <Link href="/combustible" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⛽
                  <span className="ml-3">Generar Orden De Compra ⛽</span>
              </Link>
           </li>

           <li>
              <Link href="/proveedores" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                    📃
                  <span className="ml-3">Generar Orden De Compra 📃</span>
              </Link>
           </li>

            <li>
               <Link href="/" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⚠️
               <  span className="ml-3">Cerrar Sesion</span>
               </Link>
            </li>
        </ul>



        </div>
    )
  }
  
  
  export default SidebarAgregarDetalle