import { useState, useEffect } from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';
import Obra from './Obra';

export default function EditUserFormGeneralProveedor({ ocpedidos }) {
  const [newName, setNewName] = useState('');
  const [newRut, setNewRut] = useState('');

  const { setNombre01,setRut01 } = useCombustible();
  const { id,nombre01,rut01 } = ocpedidos;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`/api/editarprovegeneral/${id}`, { nombre01: newName , rut01:newRut });
      setNombre01(newName);
      setRut01(newRut);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setNewName(nombre01);
    setNewRut(rut01);
  }, [nombre01,rut01]);

  return (
    <>
    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Editar Datos</h3>
                    
    <form onSubmit={handleSubmit} className='font-bold text-sm'>

      <label>
        Nombre: {}
        <input type="text" value={newName} onChange={(event) => setNewName(event.target.value)} />
      </label>
      <br />
      <label>
        Rut: {}
        <input type="text" value={newRut} onChange={(event) => setNewRut(event.target.value)} />
      </label>
      <br />
      
      

      <button type="submit">♻️</button>
    </form>
    </div>
    </>
  );
}
