import useSWR from 'swr'
import axios from 'axios'
import LayoutInicioAdminGeneral from "../layout/LayoutInicioAdminGeneral"
import OrdenGeneral from '../components/OrdenGeneral'



export default function Admin() {

    const fetcher = () => axios('/api/ordenesgenerales').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenesgenerales',fetcher,{refreshInterval: 100} )

    
     

    return(
        <LayoutInicioAdminGeneral pagina={'Autorizar '}>

            <h1 className="text-2xl font-black text-center"> Autorizar Orden De Compra</h1>
            <p className="text-2xl my-5"></p>


            <div className='grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-4'>

            {data && data.length ? data.map(ocpedidos =>
                
                <OrdenGeneral
                    key={ocpedidos.id}
                    ocpedidos={ocpedidos}
                />

                ):<p>No Hay Ordenes Pendientes</p>}
                </div>

        </LayoutInicioAdminGeneral>
    )
}