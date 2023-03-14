import { useState, useEffect } from 'react'
import  {PrismaClient} from '@prisma/client'
import axios from 'axios';
import useCombustible from '../hooks/useCombustible';



export default function CrearOC({ onChange }) {
    
  const [proveedores, setProveedores] = useState([])

//   useEffect(() => {
//     async function loadPosts() {
//       const data = await prisma.proveedores.findMany()
//       setProveedores(data)
//     }

//     loadPosts()
//   }, [])



useEffect(() => {
    axios
      .get("/api/proveedores")
      .then((response) => {
        setProveedores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <select onChange={onChange}>
      {proveedores.map((proveedores) => (
        <option key={proveedores.id} value={proveedores.id}>
          {proveedores.nombre}
        </option>
      ))}
    </select>
  )
}
