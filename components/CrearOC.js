import { useState, useEffect } from 'react'
import axios from 'axios';

export default function CrearOC({ onChange }) {
    
  const [proveedores, setProveedores] = useState([])
  
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
