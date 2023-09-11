import { useState, useEffect } from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';
import Obra from './Obra';

export default function EditUserFormGeneralProveedor({ ocpedidos }) {
  const [newName, setNewName] = useState('');
  const [newRut, setNewRut] = useState('');
  const [options, setOptions] = useState([]);

  const { setNombre01,setRut01,setFechasolicitud } = useCombustible();
  const { id,nombre01,rut01,fechasolicitud } = ocpedidos;
  const [obra, setObra] = useState('');
  const [rut, setRut] = useState('');
  const [fechasolicitudnew, setFechasolicitudnew] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`/api/editarprovegeneral/${id}`, { nombre01: obra , rut01:rut, fechasolicitud:fechasolicitudnew });
      setNombre01(obra);
      setRut01(rut);
      setFechasolicitud(fechasolicitudnew)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setObra(nombre01);
    setRut(rut01);
    setFechasolicitudnew(fechasolicitud)
  }, [nombre01,rut01]);


  useEffect(() => {
    fetch('/api/proveedores')
    .then(response => response.json())
    .then(data => setOptions(data))
    .catch(error => console.log(error));
  },  []);

  



  return (
    <>
      <div className="space-y-1">
        <h3 className="text-lg font-bold">Editar</h3>
                      
        <form onSubmit={handleSubmit} className='font-bold text-sm'>

          <label className=' hidden'>
            Nombre: {}
            <input type="text" value={obra} onChange={(event) => setObra(event.target.value)} />
          </label>

          <label className=''>
            
            <input type="date" value={fechasolicitudnew} onChange={(event) => setFechasolicitudnew(event.target.value)} />
          </label>
          
          <select
          id="area"
          className="bg-white w-full p-2 rounded-md text-left py-2"
          value={obra}
          onChange={e => setObra(e.target.value)}
        >
          <option value="">-</option>
          {options.map(option => (
          <option key={option.value} value={option.value}>{option.nombre}</option>
          ))}
        </select>  
          <label className=' hidden'>
            Rut: {}
            <input type="text" value={rut} onChange={(event) => setRut(event.target.value)} />
          </label>
          <br/>
          <button className='py-4 pb-0' type="submit">♻️</button>
        </form>
        
      </div>
    </>
  );
}
