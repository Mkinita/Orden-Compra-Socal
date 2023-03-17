import { useState } from 'react'
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';

export default function EditUserForm({orden}) {
    
  
  const [newName, setNewName] = useState('')
  const {setNombre} =useCombustible()
  const {id,  total, nombre,pedido, fecha, folio, descripcion, senores,direccion,rut,fono,comuna} = orden


  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await axios.post(`/api/editar/${id}`, { nombre: newName }) // <-- Agregar el nuevo nombre a la solicitud
      setNombre(newName)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID del usuario:
        <select value={id} onChange={(event) => setId(event.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value={id}>{nombre}</option>
          {/* Agrega más opciones aquí para permitir que el usuario seleccione la ID del registro que desea editar */}
        </select>
      </label>
      <br />
      <label>
        Nuevo nombre:
        <input type="text" value={newName} onChange={(event) => setNewName(event.target.value)} />
      </label>
      <br />




      <button type="submit">Actualizar nombre</button>




     
    </form>
  )
}
