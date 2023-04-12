import useSWR from 'swr'
import axios from 'axios'
import LayoutImprecion from "../layout/LayoutImprecion"
import PdfOcGeneral from '../components/PdfOcGeneral'
import TablaGeneral from '@/components/TablaGeneral'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'






export default function Admin() {

    const fetcher = () => axios('/api/listado-ordenes-generales').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-ordenes-generales',fetcher,{refreshInterval: 100} )

    const router = useRouter()
    const { id } = router.query

    

    const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/listado-ordenes-generales'
  
    const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()

      setDatos(data)
    }   
     //función de búsqueda
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



    console.log(datos)


    
      

    
    
      
      
      
    
     

    return(
        <LayoutImprecion pagina={'Listado-OC'}>

            
            <div className='mt-auto text-xs'>
                <input value={buscar} onChange={buscador} type="text" placeholder='Buscar Por Nº O.C.' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            {data && data.length ? results.map(ocpedidos =>
                
                <PdfOcGeneral
                    key={ocpedidos.id}
                    ocpedidos={ocpedidos}
                />

                ):
                <p>No Hay Ordenes Pendientes</p>
            }

            
                <button className="m-auto" onClick={() => window.print()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                    </svg>
                </button>

        </LayoutImprecion>

        
    )

    
}
