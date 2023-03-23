import useSWR from 'swr'
import axios from 'axios'
import LayoutCombustibleObra from "../layout/LayoutCombustibleObra"
import OrdenGeneralPendienteCombustibleObra from '../components/OrdenGeneralPendienteCombustibleObra'



export default function Admin() {

    const fetcher = () => axios('/api/ordenes-pendientes-combustible-obra').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes-pendientes-combustible-obra',fetcher,{refreshInterval: 100} )

    
     

    return(
        <LayoutCombustibleObra pagina={'Autorizar'}>

            <h1 className="text-2xl font-black text-center">Estado De Ordenes Combustible Obras</h1>
            <p className="text-2xl my-5"></p>
            

            

            {data && data.length ? data.map(ordenobra =>
                <div className=''>
                <OrdenGeneralPendienteCombustibleObra
                    key={ordenobra.id}
                    ordenobra={ordenobra}
                />
                </div>
                

                ):<p>No Hay Ordenes Pendientes</p>}

        </LayoutCombustibleObra>
    )
}