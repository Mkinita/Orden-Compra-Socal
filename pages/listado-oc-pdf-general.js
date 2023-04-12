import useSWR from 'swr'
import axios from 'axios'
import LayoutInicioAdminGeneral from "../layout/LayoutInicioAdminGeneral"
import ListadoPdfOcGeneral from '../components/ListadoPdfOcGeneral'
import TablaGeneral from '@/components/TablaGeneral'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'






export default function Admin() {

    const fetcher = () => axios('/api/listado-ordenes-generales').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-ordenes-generales',fetcher,{refreshInterval: 100} )





    const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/listado-ordenes-generales'
  
    const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      //console.log(data)
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


    return(
        <LayoutInicioAdminGeneral pagina={'Listado-OC'}>

            <h1 className="text-2xl font-black text-center"> Listado Ordenes De Compra PDF</h1>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={buscar} onChange={buscador} type="text" placeholder='Filtra Por Nº O.C.' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            {/* <TablaGeneral/> */}

            <div className='grid gap-4 grid-cols-1 md:grid-cols-7 2xl:grid-cols-4'>
            
                {data && data.length ? results.map(ocpedidos =>
                    
                    <ListadoPdfOcGeneral
                        key={ocpedidos.id}
                        ocpedidos={ocpedidos}
                    />

                    ):
                    <p>No Hay Ordenes Nulas</p>
                }

            </div>

        

        </LayoutInicioAdminGeneral>

        
    )

    
}


