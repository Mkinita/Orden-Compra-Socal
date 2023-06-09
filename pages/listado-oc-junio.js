import useSWR from 'swr'
import axios from 'axios'
import LayoutInicioAdminGeneral from "../layout/LayoutInicioAdminGeneral"
import ListadoOcGeneral from '../components/ListadoOcGeneral'
import TablaGeneral from '@/components/TablaGeneral'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'






export default function Admin() {

    const fetcher = () => axios('/api/listado-ordenes-junio').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-ordenes-junio',fetcher,{refreshInterval: 100} )



    const exportTo = (orden) => {
        const ws = XLSX.utils.json_to_sheet(orden)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
        XLSX.writeFile(wb, 'table-data.xlsx')
    }

    const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/listado-ordenes-junio'
  
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
     const results = !buscar ? datos : datos.filter((dato)=> dato.obra.toLowerCase().includes(buscar.toLocaleLowerCase()))

    
     useEffect( ()=> {
      showData()
    }, [])



    console.log(datos)


    
      

    
    
      
      
      
    
     

    return(
        <LayoutInicioAdminGeneral pagina={'Listado-OC'}>

            <h1 className="text-2xl font-black text-center"> Ordenes De Compra Junio</h1>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={buscar} onChange={buscador} type="text" placeholder='Filtra Por Obra' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <TablaGeneral/>
            {data && data.length ? results.map(ocpedidos =>
                
                <ListadoOcGeneral
                    key={ocpedidos.id}
                    ocpedidos={ocpedidos}
                />

                ):
                <p>No Hay Ordenes Pendientes</p>
            }

            <div  className="text-center m-10">
                <button onClick={() => exportTo(data)}>📥 Exportar a Excel</button>
            </div>

        </LayoutInicioAdminGeneral>

        
    )

    
}


