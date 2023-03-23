
import { useState, useEffect } from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';
import Obra from './Obra';

export default function EditUserForm({ orden }) {
  const [newName, setNewName] = useState('');
  const [newEmisor, setNewEmisor] = useState('');
  const [newObra, setNewObra] = useState('');

  const { setNombre,setEmisor,setObra } = useCombustible();
  const { id, total, nombre,emisor,obra } = orden;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`/api/editar/${id}`, { nombre: newName , emisor: newEmisor, obra:newObra });
      setNombre(newName);
      setEmisor(newEmisor);
      setObra(newObra);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setNewName(nombre);
    setNewEmisor(emisor);
    setNewObra(obra);
  }, [nombre,emisor]);

  return (
    <form onSubmit={handleSubmit} className='font-bold text-sm'>
      
      
      <label>
        Nuevo Solicitante: {}
        <input type="text" value={newEmisor} onChange={(event) => setNewEmisor(event.target.value)} />
      </label>
      <br/>
      <label>
        Nuevo Emisor: {}
        <input type="text" value={newName} onChange={(event) => setNewName(event.target.value)} />
      </label>
      <br />
      <label>
        Nueva Obra: {}
        <input type="text" value={newObra} onChange={(event) => setNewObra(event.target.value)} />
      </label>
      <br />
      

      <button type="submit">♻️</button>
    </form>
  );
}
