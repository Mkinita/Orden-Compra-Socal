import Image from "next/image";
import useCombustible from "../hooks/useCombustible";
import Faena from "./Faena";
import Link from 'next/link';


const Sidebar = () => {
    const {faenas} = useCombustible()

    
    return(
        <>
            <Image width={280} height={100} src="/assets/img/socal.png" alt="logo" className="m-auto"/>

            <div className="px-3 py-4 overflow-y-auto rounded bg-white">
                <ul className="space-y-2">
                    

                    <li>
                    
                    </li> 

                     <li>
                        <Link href="/orden-compra" className="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            ✔️
                            <span className="ml-3">Ordenes Autorizadas ⛽</span>
                        </Link>
                    </li>



                    <li>
                        <Link href="/combustible" className="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                        ⛽
                            <span className="ml-3">Generar Orden De Compra</span>
                        </Link>
                    </li>


                    


                    
                    

                    <li>
                        <Link href="/proveedores" className="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                        📝
                            <span className="ml-3">Generar Orden De Compra</span>
                        </Link>
                    </li>



                    

                    <li>
                        <Link href="/orden-compra-general" className="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                            ✔️
                            <span className="ml-3">Ordenes Autorizadas 📝</span>
                        </Link>
                    </li>


                    

                    <li>
                        <Link href="/agregardetalle" className="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                        ➕
                        <span className="ml-3">Agregar Descripcion</span>
                        </Link>
                    </li>


                    <li>
                        <Link href="/" className="flex items-center p-2 text-base font-black text-black rounded-lg bg-amber-400 dark:text-black hover:bg-gray-100 dark:hover:bg-amber-400 uppercase">
                        ⚠️
                        <span className="ml-3">Cerrar Sesion</span>
                        </Link>
                    </li>

                    
                </ul>



                


                
            </div>
        </>
    )
}


export default Sidebar