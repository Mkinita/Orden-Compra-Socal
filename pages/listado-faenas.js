import { Inter } from '@next/font/google'
import  LayoutInicioAdminGeneral from '../layout/LayoutInicioAdminGeneral'
import ListadoFaenas from '../components/ListadoFaenas'
import AgregarObra from '../components/AgregarObra'
import useCombustible from '../hooks/useCombustible'
import {useState, useEffect} from 'react'




const inter = Inter({ subsets: ['latin'] })

export default function Solicitud() {

  const {faenaActual} = useCombustible()
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = '/api/faenas'

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
    <   LayoutInicioAdminGeneral pagina={`Faenas`}>
    
      {/* <h1 className='text-4xl font-black'>{faenaActual?.nombre}</h1> */}
      
      <h2 class="text-black text-lg font-semibold pb-4">Faenas</h2>
      <div className='mt-auto'>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar Nombre' className=' shadow rounded-lg text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 shadow rounded-lg'>  
        {results.map(faenas=>(
          <ListadoFaenas key={faenas.id} faenas={faenas}/>
        ))}
      </div>
      <div className='shadow rounded-lg'>
        <AgregarObra/>
      </div>
      </div>
    </  LayoutInicioAdminGeneral>
  )
}