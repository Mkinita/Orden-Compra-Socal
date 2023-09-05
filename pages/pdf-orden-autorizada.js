import useSWR from 'swr'
import axios from 'axios'
import LayoutInicioAdminGeneral from "../layout/LayoutInicioAdminGeneral"
import PdfImprimirOrden from '../components/PdfImprimirOrden'
import {useState, useEffect} from 'react'



export default function Admin() {

    const fetcher = () => axios('/api/ordenes-autorizadas-pdf').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes-autorizadas-pdf',fetcher,{refreshInterval: 100} )

    const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState("")

    const URL = '/api/ordenes-autorizadas-pdf'
  
    const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setDatos(data)
    }   
     
    const buscador = (e) => {
        setBuscar(e.target.value)   
    }
    


    const results = !buscar ? datos : datos.filter((dato) => {
        const id = typeof dato.id === 'string' ? dato.id : String(dato.id);
        return id.toLowerCase().includes(buscar.toLowerCase());
      });
      
    
     useEffect( ()=> {
      showData()
    }, [])

    
     

    return(
        <LayoutInicioAdminGeneral pagina={'OC-PDF'}>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={buscar} onChange={buscador} type="text" placeholder='Filtra Por Nº O.C.' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse  rounded-lg shadow'/> 🔍
            </div>
<div className='grid grid-cols-1 md:grid-cols-3'>
            {data && data.length ? results.map(ocpedidos =>
                <div className=''>
                <PdfImprimirOrden

                    ocpedidos={ocpedidos}
                />
                </div>
            ):<p className='text-center'>No Hay Ordenes Pendientes</p>}
</div>
        </LayoutInicioAdminGeneral>
    )
}