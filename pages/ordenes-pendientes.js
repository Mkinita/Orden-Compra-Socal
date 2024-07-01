// import useSWR from 'swr'
// import axios from 'axios'
// import Layout from "../layout/Layout"
// import OrdenGeneralPendiente from '../components/OrdenGeneralPendiente'
// import {useState, useEffect} from 'react'
// import { useRouter } from 'next/router';
// import Cookies from 'js-cookie';



// export default function Admin() {

//     const fetcher = () => axios('/api/ordenes-pendientes').then(datos => datos.data)
//     const { data, error, isLoading } = useSWR('/api/ordenes-pendientes',fetcher,{refreshInterval: 100} )

//     const [ users, setUsers ] = useState([])
//     const [search, setSearch] = useState(typeof window !== 'undefined' ? localStorage.getItem('search') || ' ' : ' ');



//     //función para traer los datos de la API
//     const URL = '/api/ordenes-pendientes'

//     const showData = async () => {
//       const response = await fetch(URL)
//       const data = await response.json()
//       setUsers(data)
//     }   
//     //función de búsqueda
//     const searcher = (e) => {
//       const value = e.target.value.trim();
//       setSearch(value);
//       localStorage.setItem('search', value); // Guardar el valor en localStorage
//     };
//     //metodo de filtrado 2   
//     const results = !search ? users : users.filter((dato)=> dato.obra.toLowerCase().includes(search.toLocaleLowerCase()))
//       useEffect( ()=> {
//       showData()
//     }, [])


//     const [email, setEmail] = useState('');
//     const router = useRouter();

//     useEffect(() => {
//     // Obtén el correo electrónico almacenado en la cookie
//     const userEmail = Cookies.get('userEmail');

//     // Si el correo electrónico no está presente, redirige al usuario de vuelta a la página de inicio de sesión
//     if (!userEmail) {
//       router.push('/');
//     } else {
//       setEmail(userEmail);
//     }
//   }, []);

    

    
     

//     return(
//         <Layout pagina={'Autorizar'}>

//             <h1 className="text-2xl font-black text-center">Estado De Ordenes</h1>
//             <p className="text-2xl my-5"></p>
//             <div className='mt-auto'>
//                 <input value={email} onChange={searcher} type="text" className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 
//             </div>
            

            

//             {data && data.length ? results.map(ocpedidos =>
//                 <div className=''>
//                 <OrdenGeneralPendiente
//                     key={ocpedidos.id}
//                     ocpedidos={ocpedidos}
//                 />
//                 </div>
                

//                 ):<p>No Hay Ordenes Pendientes</p>}

//         </Layout>
//     )
// }



import useSWR from 'swr'
import axios from 'axios'
import Layout from "../layout/Layout"
import OrdenGeneralPendiente from '../components/OrdenGeneralPendiente'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';



export default function Admin() {

    const fetcher = () => axios('/api/ordenes-pendientes').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes-pendientes',fetcher,{refreshInterval: 100} )

    const [email, setEmail] = useState(' ');
    const router = useRouter();

    useEffect(() => {
    // Obtén el correo electrónico almacenado en la cookie
    const userEmail = Cookies.get('userEmail');

    // Si el correo electrónico no está presente, redirige al usuario de vuelta a la página de inicio de sesión
    if (!userEmail) {
      router.push('/');
    } else {
      setEmail(userEmail + ' ');
    }
  }, []);

    const [ users, setUsers ] = useState([])
    // const [search, setSearch] = useState(typeof window !== 'undefined' ? localStorage.getItem('search') || ' ' : ' ');
    const [ search, setSearch ] = useState(typeof window !== 'undefined' ? localStorage.getItem('search') || ' ' : ' ');



    //función para traer los datos de la API
    const URL = '/api/ordenes-pendientes'

    // const showData = async () => {
    //   const response = await fetch(URL)
    //   const data = await response.json()
    //   setUsers(data)
    // }   
    // //función de búsqueda
    // const searcher = (e) => {
    //   const value = e.target.value.trim();
    //   setSearch(value);
    //   localStorage.setItem('search', value); // Guardar el valor en localStorage
    // };

    const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      //console.log(data)
      setUsers(data)
    }   
     //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.email)   
    }
    //metodo de filtrado 2   
    const results = !search ? users : users.filter((dato)=> dato.obra.toLowerCase().includes(search.toLocaleLowerCase()))
      useEffect( ()=> {
      showData()
    }, [])


    

    

    
     

    return(
        <Layout pagina={'Autorizar'}>

            <h1 className="text-2xl font-black text-center">Estado De Ordenes</h1>
            <p className="text-2xl my-5"></p>
            <div className='mt-auto'>
                <input value={search} onChange={searcher} type="text" className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 
            </div>
            

            

            {data && data.length ? results.map(ocpedidos =>
                <div className=''>
                <OrdenGeneralPendiente
                    key={ocpedidos.id}
                    ocpedidos={ocpedidos}
                />
                </div>
                

                ):<p>No Hay Ordenes Pendientes</p>}

        </Layout>
    )
}