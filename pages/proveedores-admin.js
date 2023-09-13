import { Inter } from '@next/font/google'
import LayouytProveedorAdmin from '../layout/LayouytProveedorAdmin'
import Proveedor from '../components/Proveedor'
import useCombustible from '../hooks/useCombustible'
import {useState, useEffect} from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Solicitud() {

  const {faenaActual} = useCombustible()
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = '/api/proveedores'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
   //metodo de filtrado 2   
   const results = !search ? users : users.filter((dato)=> dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])

  return (
    <LayouytProveedorAdmin pagina={`Proveedores`}>
    
      {/* <h1 className='text-4xl font-black'>{faenaActual?.nombre}</h1> */}
      <p className='text-gray-500 text-lg font-semibold pb-2'>
        Proveedores
      </p>
      <div className='mt-auto'>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='text-gray-700 shadow rounded-lg my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
      </div>
      <div className='grid gap-2 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4'>  
        {results.map(proveedor=>(
          <Proveedor key={proveedor.id} proveedor={proveedor}/>
        ))}
      </div>
    </LayouytProveedorAdmin>
  )
}