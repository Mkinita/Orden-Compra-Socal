import LayoutAgregar from "../layout/LayoutAgregar"
import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import { v4 as uuidv4 } from 'uuid';



export default function Solicitud() {
    const { email,
            password,
            setEmail,
            setPassword,
            agregarUsuario 
        } = useCombustible()


    const comprobarUsuario = useCallback(() => {
        return password.length === 0 || password === "" || password.length <6;
        
    },[password, password])


    useEffect(() => {
        comprobarUsuario()
    },[password, comprobarUsuario])


    
    return (
        <LayoutAgregar pagina='Usuarios'>
            {/* <p>{patente}</p> */}
            <h1 className="text-2xl font-black lg:w-3/4">Ingrese Nuevo Usuario</h1>
            <p className="text-2xl my-10"></p>

            <form 
                onSubmit={agregarUsuario}
                className="grid grid-cols-2 gap-2"
            >
                <div>
                    <label 
                        htmlFor="email"
                        className="uppercase text-slate-800 font-bold text-sm block text-center lg:w-3/4">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm"  
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                
                </div>



                <div>
                    <label 
                        htmlFor="password"
                        className="block text-center lg:w-3/4 uppercase text-slate-800 font-bold text-sm">Password</label>
                    <input
                        id="password"
                        type="text"
                        className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md text-sm"  
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                
                </div>




                <div className="mt-10">
                    <input
                        type="submit"
                        className= {`${comprobarUsuario() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full  px-5 py-2 rounded uppercase font-bold text-white  text-center lg:w-3/4 text-sm`}
                        value="Agregar"
                        disabled={comprobarUsuario()}
                    />
                </div>


                
            </form>
        </LayoutAgregar>
   )
}