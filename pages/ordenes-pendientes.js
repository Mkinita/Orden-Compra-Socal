import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import OrdenGeneralPendiente from '../components/OrdenGeneralPendiente'



export default function Admin() {

    const fetcher = () => axios('/api/ordenes-pendientes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes-pendientes',fetcher,{refreshInterval: 100} )

    
     

    return(
        <Layout pagina={'Autorizar'}>

            <h1 className="text-2xl font-black text-center">Estado De Ordenes</h1>
            <p className="text-2xl my-5"></p>
            

            

            {data && data.length ? data.map(ocpedidos =>
                <div className=''>
                <OrdenGeneralPendiente
                    key={ocpedidos.id}
                    ocpedidos={ocpedidos}
                />
                </div>
                

                ):<p>No Hay Ordenes Pendientes</p>}

        </Layout>
    )
}