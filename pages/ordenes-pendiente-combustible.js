import useSWR from 'swr'
import axios from 'axios'
import LayoutCombustible from "../layout/LayoutCombustible"
import OrdenGeneralPendienteCombustible from '../components/OrdenGeneralPendienteCombustible'



export default function Admin() {

    const fetcher = () => axios('/api/ordenes-pendientes-combustible').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes-pendientes-combustible',fetcher,{refreshInterval: 100} )

    
     

    return(
        <LayoutCombustible pagina={'Autorizar'}>

            <h1 className="text-2xl font-black text-center">Estado De O.C Combustible</h1>
            <p className="text-2xl my-5"></p>
            

            

            {data && data.length ? data.map(ordenobra =>
                <div className=''>
                <OrdenGeneralPendienteCombustible
                    key={ordenobra.id}
                    ordenobra={ordenobra}
                />
                </div>
                

                ):<p>No Hay Ordenes Pendientes</p>}

        </LayoutCombustible>
    )
}