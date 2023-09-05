import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"



export default function Solicitud() {
    const { nombre,
            direccion,
            rut,
            fono,
            comuna,
            setNombre,
            setDireccion,
            setRut,
            setFono,
            setComuna,
            agregarProveedor } = useCombustible()








            


    const comprobarProvedor = useCallback(() => {
        return comuna.length === 0 || comuna === "" || comuna.length <1;
        
    },[comuna, comuna])


    useEffect(() => {
        comprobarProvedor()
    },[comuna, comprobarProvedor])


    
    return (
        <div>
            {/* <p>{patente}</p> */}
            <h1 className="text-black text-lg font-semibold text-center">Ingrese Nuevo Proveedor</h1>
            <p className="text-2xl my-10"></p>

            <form 
                onSubmit={agregarProveedor}
                className="grid grid-cols-1 text-center"
            >
                <div>
                    
                    <input
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm text-center"  
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        placeholder="Ingresa Nombre"
                    />
                
                </div>



                <div>
                    <div className="p-1"></div>
                    <input
                        id="direccion"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm text-center"  
                        value={direccion}
                        onChange={e => setDireccion(e.target.value)}
                        placeholder="Ingresa Direccion"
                    />
                
                </div>



                <div>
                    <div className="p-1"></div>
                    <input
                        id="rut"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm text-center"  
                        value={rut}
                        onChange={e => setRut(e.target.value)}
                        placeholder="Ingresa Rut"
                    />
                
                </div>

                <div>
                    <div className="p-1"></div>
                    <input
                        id="fono"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm text-center"  
                        value={fono}
                        onChange={e => setFono(e.target.value)}
                        placeholder="Ingresa Fono"
                    />
                
                </div>


                <div>
                    <div className="p-1"></div>
                    <input
                        id="comuna"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm text-center"  
                        value={comuna}
                        onChange={e => setComuna(e.target.value)}
                        placeholder="Ingresa Comuna"
                    />
                
                </div>




                <div>
                    <label 
                        htmlFor="comuna"
                        className="hidden text-center lg:w-3/4 uppercase text-slate-800 font-bold text-sm">Comuna</label>
                    <input
                        id="comuna"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm hidden"  
                        value={comuna}
                        onChange={e => setComuna(e.target.value)}
                    />
                
                </div>



                

                

                <div className="mt-10">
                    <input
                        type="submit"
                        className= {`${comprobarProvedor() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full  px-5 py-2 rounded uppercase font-bold text-white  text-center lg:w-3/4 text-sm`}
                        value="Agregar Proveedor"
                        disabled={comprobarProvedor()}
                    />
                </div>


                
            </form>
        </div>
   )
}