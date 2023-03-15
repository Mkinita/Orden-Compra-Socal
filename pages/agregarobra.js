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
        <LayoutAgregar pagina='Proveedores'>
            {/* <p>{patente}</p> */}
            <h1 className="text-2xl font-black  lg:w-3/4">Ingrese Nueva Obra</h1>
            <p className="text-2xl my-10"></p>

            <form 
                onSubmit={agregarFaena}
                className="grid grid-cols-1 gap-2"
            >
                <div>
                    <label 
                        htmlFor="nombre"
                        className="uppercase text-slate-800 font-bold text-sm block text-center lg:w-3/4">Nombre</label>
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
                        value="Agregar Detalle"
                        disabled={comprobarDetalleFaena()}
                    />
                </div>
            </form>


            <h1 className="text-2xl font-black  lg:w-3/4 mt-10">Listado De Obras</h1>
            <div className="p-5"></div>
            <div className="grid grid-cols-2">
            {faenas.map(faena=>(
          <Faena key={faena.id} faena={faena}/>
        ))}


</div>


        </LayoutAgregar>
   )
}