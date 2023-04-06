import { Inter } from '@next/font/google'
import useSWR from 'swr'
import axios from 'axios'
import LayoutInicioAdminGeneral from '../layout/LayoutInicioAdminGeneral'
import OrdenGeneralPrueba from '../components/OrdenGeneralPrueba'
import useCombustible from '../hooks/useCombustible'
import {useState, useEffect} from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Solicitud() {

  const fetcher = () => axios('/api/ordenesgenerales').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/ordenesgenerales',fetcher,{refreshInterval: 100} )


    

      

  return (
    <LayoutInicioAdminGeneral pagina={`Orden-De-Compra`}>
    
      {/* <h1 className='text-4xl font-black'>{faenaActual?.nombre}</h1> */}
      <h1 className="text-2xl font-black text-center p-5"> Autorizar Orden De Compra</h1>
      <p className="text-2xl my-5"></p>
      {/* <div className='mt-auto'>
      <input value={buscar} onChange={buscador} type="text" placeholder='Buscar Por Nº O.C.' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
      </div> */}
      <div className='grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-4'>  
        {/* {results.map(ocpedidos=>(
          <OrdenGeneralPrueba key={ocpedidos.id} ocpedidos={ocpedidos}/>
        ))} */}
        {data && data.length ? data.map(ocpedidos =>
                
                <OrdenGeneralPrueba
                    key={ocpedidos.id}
                    ocpedidos={ocpedidos}
                />

                ):<p>No Hay Ordenes Pendientes</p>}
      </div>
    </LayoutInicioAdminGeneral>
  )
}