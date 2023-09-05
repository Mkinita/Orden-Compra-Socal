import LayoutAgregar from "../layout/LayoutAgregar"
import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import Faena from "@/components/Faena"




export default function DetalleObra() {
    const { nombre, setNombre, agregarFaena, faenas } = useCombustible()













            


    const comprobarDetalleFaena = useCallback(() => {
        return nombre.length === 0 || nombre === "" || nombre.length <2;
        
    },[nombre, nombre])


    useEffect(() => {
        comprobarDetalleFaena()
    },[nombre, comprobarDetalleFaena])


    
    return (
        
        <div className="">
            {/* <p>{patente}</p> */}
            <h1 className="text-black text-lg font-semibold  text-center">Ingrese Nueva Faena</h1>
            <p className="text-2xl my-10"></p>

            <form 
                onSubmit={agregarFaena}
                className="grid grid-cols-1 gap-2 text-center "
            >
                <div className="">
                    <label 
                        htmlFor="nombre"
                        className="text-center uppercase text-slate-800 font-bold text-sm block pb-2">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md"  
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                
                </div>

                <div className="mt-2">
                    <input
                        type="submit"
                        className= {`${comprobarDetalleFaena() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full  px-5 py-2 rounded uppercase font-bold text-white  text-center lg:w-3/4 text-sm`}
                        value="Agregar"
                        disabled={comprobarDetalleFaena()}
                    />
                </div>
            </form>


            


</div>



        
   )
}