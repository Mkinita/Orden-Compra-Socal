import Image from "next/image";
import useCombustible from "../hooks/useCombustible";
import Faena from "./Faena";
import Link from 'next/link';


const SidebarInicioAdmin = () => {
    

    
    return(
        <>
            <Image width={280} height={100} src="/assets/img/socal.png" alt="logo" className="m-auto"/>

            <div className="px-3 py-4 overflow-y-auto rounded bg-white">

            <img src="/assets/img/inicioadmin.gif" alt="animación" className="hidden md:block mt-5 mx-auto" />
            </div>
        </>
    )
}


export default SidebarInicioAdmin