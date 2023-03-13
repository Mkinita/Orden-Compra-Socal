import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import OrdenGeneral from '../components/OrdenGeneral'



export default function Admin() {

    const fetcher = () => axios('/api/ordenesgenerales').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenesgenerales',fetcher,{refreshInterval: 100} )

    
     

    return(
        <AdminLayout pagina={'Autorizar'}>

            <h1 className="text-2xl font-black text-center"> Autorizar Orden De Compra</h1>
            <p className="text-2xl my-5"></p>

            {data && data.length ? data.map(ocpedidos =>
                
                <OrdenGeneral
                    key={ocpedidos.id}
                    ocpedidos={ocpedidos}
                />

                ):<p>No Hay Ordenes Pendientes</p>}

        </AdminLayout>
    )
}