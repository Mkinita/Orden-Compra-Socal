import Image from "next/image";
import useCombustible from "../hooks/useCombustible";
import Faena from "./Faena";
import Link from 'next/link';


const SidebarInicioAdmin = () => {
    

    
    return(
        <>
            <Image width={280} height={100} src="/assets/img/socal.png" alt="logo" className="m-auto py-10"/>


            

            {/* <div className="px-3 py-4 overflow-y-auto rounded bg-white">
        <ul className="space-y-2">


         
           <li>
              <Link href="/autorizar" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⛽
                  <span className="ml-3">O.C. Combustible</span>
              </Link>
           </li>


           <li>
              <Link href="/autorizar-obra" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⛽
                  <span className="ml-3">O.C. Por Obra</span>
              </Link>
           </li>


            <li>
              <Link href="/autorizarordengeneraladmin" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                    📝
                  <span className="ml-3">Orden De Compra</span>
              </Link>
           </li>




            <li>
               <Link href="https://socal-production.up.railway.app/auth/login" className="flex items-center p-2 text-xs font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                  ⚠️
               <  span className="ml-3">Cerrar Sesion</span>
               </Link>
            </li>


            




            





            
           
  
  
           
        </ul>



        </div> */}

        </>
    )
}


export default SidebarInicioAdmin