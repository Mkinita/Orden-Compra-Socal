import { Inter } from '@next/font/google'
import useSWR from 'swr'
import axios from 'axios'
import LayoutInicioAdminGeneral from '../layout/LayoutInicioAdminGeneral'
import OrdenGeneralPrueba from '../components/OrdenGeneralPrueba'




const inter = Inter({ subsets: ['latin'] })

export default function Solicitud() {

  const fetcher = () => axios('/api/ordenesgenerales').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/ordenesgenerales',fetcher,{refreshInterval: 100} )


    

      

  return (
    <LayoutInicioAdminGeneral pagina={`Orden-De-Compra`}>
    
      <h1 className="py-2 text-center font-bold text-lg"> Autorizar Orden De Compra</h1>
      <p className="text-2xl my-5"></p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4'>  
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