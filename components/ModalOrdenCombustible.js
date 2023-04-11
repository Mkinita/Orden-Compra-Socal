import { useState, useEffect } from "react";
import useCombustible from "../hooks/useCombustible";
import {formatearDinero} from "helpers/index"
import { useRouter } from 'next/router'
import EditarOrdenGeneral from "./EditarOrdenGeneral"
import Image from "next/image";


const ModalOrdenCombustible = () => {
    const { ocpedidos, handleChangeModal, handleAgregarOrden, orden } = useCombustible();
    const [edicion, setEdicion] = useState(false);
    const {id, nombre, total, emisor,pedido,pedido01,obra, fecha, folio, descripcion} = orden

        

    


    





  return (
    <div className="gap-10">
      
        <div className="text-center">
            <div className="flex justify-end pb-2">
                <button onClick={handleChangeModal}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
            </div>


            {pedido.map(oc => (
                <div key={oc.id}
                className="grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4"
                >
                    
                    

                    <div className="xl:w-44 md:w-4 sm:w-32 space-y-2 m-auto">
                        <Image
                            width={400}
                            height={500}
                            src={`/assets/img/${oc.imagen}`}
                            alt={`imagen oc${oc.nombre}`}
                            
                        />
                    </div> 

                    {pedido01.map(oc => (
                <div key={oc.id}
                >
                    
                    

                    <div className="py-10 xl:w-44 md:w-4 sm:w-32 space-y-2 m-auto">
                    <h3 className="text-xl font-bold">Proveedor</h3>
                        <p className="text-xs font-bold">Nombre: {oc.nombre}</p>
                        <p className="text-xs font-bold">Rut: {oc.rut}</p>
                        <h3 className="text-lg font-bold">Descripcion</h3>
                        <p className="text-xs font-bold">{descripcion}</p>
                    </div> 
                </div>
            ))}
                </div>
            ))}


            
        </div>
    </div>
  );
};

export default ModalOrdenCombustible;