import useSWR from 'swr'
import axios from 'axios'
import AdminLayout from "../layout/AdminLayout"
import OrdenObra from '../components/OrdenObra'



export default function Admin() {

    const fetcher = () => axios('/api/ordenesobra').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenesobra',fetcher,{refreshInterval: 100} )

    
     

    return(
        <AdminLayout pagina={'Autorizar'}>

            <h1 className="text-3xl font-black text-center"> Autorizar</h1>
            <p className="text-2xl my-5"></p>

            {data && data.length ? data.map(orden =>
                
                <OrdenObra
                    key={orden.id}
                    orden={orden}
                />

                ):<p>No Hay Ordenes Pendientes</p>}

        </AdminLayout>
    )
}