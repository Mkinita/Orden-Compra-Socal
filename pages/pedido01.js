import { Inter } from '@next/font/google'
import LayoutPedido01 from '../layout/LayoutPedido01'
import Proveedor from '../components/Proveedor'
import useCombustible from '../hooks/useCombustible'
import {useState, useEffect} from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Solicitud() {

  const {faenaActual} = useCombustible()
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'http://localhost:3000/api/proveedores'

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
    <LayoutPedido01 pagina={`Proveedores`}>
    
      {/* <h1 className='text-4xl font-black'>{faenaActual?.nombre}</h1> */}
      <p className='text-2xl mx-5 my-3 font-bold'>
        Proveedores
      </p>
      <div className='mt-auto'>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4'>  
        {results.map(proveedor=>(
          <Proveedor key={proveedor.id} proveedor={proveedor}/>
        ))}
      </div>
    </LayoutPedido01>
  )
}