import { Inter } from '@next/font/google'
import  AdminLayout from '../layout/AdminLayout'
import ListadoUsuarios from '../components/ListadoUsuarios'
import useCombustible from '../hooks/useCombustible'
import {useState, useEffect} from 'react'





export default function Solicitud() {

  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = '/api/usuarios'

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
   const results = !search ? users : users.filter((dato)=> dato.email.toLowerCase().includes(search.toLocaleLowerCase()))
  
   useEffect( ()=> {
    showData()
  }, [])

  return (
    <   AdminLayout pagina={`Usuarios`}>
    
      {/* <h1 className='text-4xl font-black'>{faenaActual?.nombre}</h1> */}
      <p className='text-2xl mx-5 my-3 font-bold'>
        Usuarios
      </p>
      <div className='mt-auto'>
        <input value={search} onChange={searcher} type="text" placeholder='Buscar' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-4'>  
        {results.map(user=>(
          <ListadoUsuarios key={user.id} user={user}/>
        ))}
      </div>
    </  AdminLayout>
  )
}