import Link from "next/link"
import Pasos from "./Pasos"

export const SidebarAdmin = () => {
    return (
      <div className="px-3 py-4 overflow-y-auto rounded bg-white">
        <ul className="space-y-2">


         
           <li>
              <Link href="/autorizar" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⛽
                  <span className="ml-3">Autorizar Las Ordenes De Compras 🔑</span>
              </Link>
           </li>


           


           <li>
              <Link href="/combustible" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⛽
                  <span className="ml-3">Generar Orden De Compra</span>
              </Link>
           </li>


           <li>
              <Link href="/listado-oc" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⛽🔍
                  <span className="ml-3">Ordenes De Compra por Patente</span>
              </Link>
           </li>

           <li>
              <Link href="/listado-oc-general-combustible" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⛽🔍
                  <span className="ml-3">Ordenes de Compra Por Obra</span>
              </Link>
           </li>


           <li>
              <Link href="/listado-oc-general-occombustible" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⛽🔍
                  <span className="ml-3">Ordenes de Compra Por Nº O.C</span>
              </Link>
           </li>

           <li>
              <Link href="/listado-oc-general-combustible-anulado" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⛽🔍
                  <span className="ml-3">Ordenes de Compra Anuladas</span>
              </Link>
           </li>


           {/* <li>
              <Link href="/autorizarordengeneral" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  📃
                  <span className="ml-3">Autorizar Las Ordenes De Compras 🔑</span>
              </Link>
           </li>


           <li>
              <Link href="/proveedores" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  📃
                  <span className="ml-3">Generar Orden De Compra</span>
              </Link>
           </li>

           


           

           <li>
              <Link href="/listado-oc-general" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                   📃🔍
                  <span className="ml-3">Ordenes de Compra Por Obra</span>
              </Link>
           </li>


           <li>
              <Link href="/listado-oc-general-ocgeneral" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                   📃🔍
                  <span className="ml-3">Ordenes de Compra Por Nº O.C</span>
              </Link>
           </li>


           <li>
              <Link href="/listado-oc-general" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                   📃🔍
                  <span className="ml-3">Ordenes de Compra Anuladas</span>
              </Link>
           </li>
 */}

           



           



            <li>
               <Link href="/agregarproveedor" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ➕
                  <span className="ml-3">Agregar Proveedores</span>
               </Link>
            </li>


            <li>
               <Link href="/agregarobra" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
               ➕
                  <span className="ml-3">Agregar Obra</span>
               </Link>
            </li>


            <li>
               <Link href="/agregarusuario" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
               ➕
                  <span className="ml-3">Agregar Usuarios</span>
               </Link>
            </li>



            


            <li>
               <Link href="/inicioadmin" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  🏠
               <  span className="ml-3">Inicio</span>
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