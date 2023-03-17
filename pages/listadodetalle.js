import useSWR from 'swr'
import axios from 'axios'
import LayoutDetalle from "../layout/LayoutDetalle"
import ListadoDetalle from '../components/ListadoDetalle'
import Tabla from '@/components/Tabla'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'






export default function Admin() {

    const fetcher = () => axios('/api/listado-detalle').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-detalle',fetcher,{refreshInterval: 100} )



    const exportTo = (orden) => {
        const ws = XLSX.utils.json_to_sheet(orden)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
        XLSX.writeFile(wb, 'table-data.xlsx')
    }

    const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState("")
  
    //función para traer los datos de la API
    const URL = '/api/listado-detalle'
  
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
    //  metodo de filtrado 2   
    const results = !buscar ? datos : datos.filter((dato)=> dato.nombre.toLowerCase().includes(buscar.toLocaleLowerCase()))



     
      


     
    
     useEffect( ()=> {
      showData()
    }, [])


    return(
        <LayoutDetalle pagina={'Listado-OC'}>

            <h1 className="text-2xl font-black text-center"> Listado OC Combustible</h1>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={buscar} onChange={buscador} type="text" placeholder='Buscar' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>


            <div className="grid grid-cols-2 gap-1">
            
            {data && data.length ? results.map(descripcion =>
                
                <ListadoDetalle
                
                    key={descripcion.id}
                    descripcion={descripcion}
                />

                ):
                <p></p>
            }

</div>

            <div  className="text-center m-10">
                <button onClick={() => exportTo(data)}>📥 Exportar a Excel</button>
            </div>

        </LayoutDetalle>

        
    )

    
}


