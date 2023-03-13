import AdminLayout from "../layout/AdminLayout"
import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import { v4 as uuidv4 } from 'uuid';



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
        return comuna.length === 0 || comuna === "" || comuna.length <2;
        
    },[comuna, comuna])


    useEffect(() => {
        comprobarProvedor()
    },[comuna, comprobarProvedor])


    
    return (
        <AdminLayout pagina='Proveedores'>
            {/* <p>{patente}</p> */}
            <h1 className="text-2xl font-black lg:w-3/4">Ingrese Nuevo Proveedor</h1>
            <p className="text-2xl my-10"></p>

            <form 
                onSubmit={agregarProveedor}
                className="grid grid-cols-2 gap-2"
            >
                <div>
                    <label 
                        htmlFor="nombre"
                        className="uppercase text-slate-800 font-bold text-sm block text-center lg:w-3/4">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm"  
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                
                </div>



                <div>
                    <label 
                        htmlFor="direccion"
                        className="block text-center lg:w-3/4 uppercase text-slate-800 font-bold text-sm">Direccion</label>
                    <input
                        id="direccion"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm"  
                        value={direccion}
                        onChange={e => setDireccion(e.target.value)}
                    />
                
                </div>



                <div>
                    <label 
                        htmlFor="rut"
                        className="block text-center lg:w-3/4 uppercase text-slate-800 font-bold text-sm">Rut</label>
                    <input
                        id="rut"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm"  
                        value={rut}
                        onChange={e => setRut(e.target.value)}
                    />
                
                </div>

                <div>
                    <label 
                        htmlFor="fono"
                        className="block text-center lg:w-3/4 uppercase text-slate-800 font-bold text-sm">Celular</label>
                    <input
                        id="fono"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm"  
                        value={fono}
                        onChange={e => setFono(e.target.value)}
                    />
                
                </div>


                <div>
                    <label 
                        htmlFor="comuna"
                        className="block text-center lg:w-3/4 uppercase text-slate-800 font-bold text-sm">Comuna</label>
                    <input
                        id="comuna"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm"  
                        value={comuna}
                        onChange={e => setComuna(e.target.value)}
                    />
                
                </div>




                <div>
                    <label 
                        htmlFor="comuna"
                        className="block text-center lg:w-3/4 uppercase text-slate-800 font-bold text-sm">Comuna</label>
                    <input
                        id="comuna"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm"  
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
        </AdminLayout>
   )
}