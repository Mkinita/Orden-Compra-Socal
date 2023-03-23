import { useState, useEffect } from 'react';
import useCombustible from '../hooks/useCombustible';
import axios from 'axios';
import Obra from './Obra';

export default function EditarOrdenGeneral({ocpedidos}) {
  const [newcantidad, setNewCantidad] = useState('');
  const [newdescripcion, setNewDescripcion] = useState('');
  const [newValor, setNewValor] = useState('');

  const [newcantidad01, setNewCantidad01] = useState('');
  const [newdescripcion01, setNewDescripcion01] = useState('');
  const [newValor01, setNewValor01] = useState('');

  const [newcantidad02, setNewCantidad02] = useState('');
  const [newdescripcion02, setNewDescripcion02] = useState('');
  const [newValor02, setNewValor02] = useState('');

  const [newcantidad03, setNewCantidad03] = useState('');
  const [newdescripcion03, setNewDescripcion03] = useState('');
  const [newValor03, setNewValor03] = useState('');

  const [newcantidad04, setNewCantidad04] = useState('');
  const [newdescripcion04, setNewDescripcion04] = useState('');
  const [newValor04, setNewValor04] = useState('');


  const 
    {   setCantidad,
        setDescripcion,
        setValor,
        setCantidad01,
        setDescripcion01,
        setValor01,
        setCantidad02,
        setDescripcion02,
        setValor02,
        setCantidad03,
        setDescripcion03,
        setValor03,
        setCantidad04,
        setDescripcion04,
        setValor04,
        
    } = useCombustible();


  const 
    {   id,
        cantidad,
        descripcion,
        valor,
        valor01,cantidad01,descripcion01,
        valor02,cantidad02,descripcion02,
        valor03,cantidad03,descripcion03,
        valor04,cantidad04,descripcion04,
    } = ocpedidos;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`/api/editarordengeneral/${id}`, 
      { cantidad: newcantidad , descripcion: newdescripcion, valor:newValor,
        cantidad01: newcantidad01 , descripcion01: newdescripcion01, valor:newValor01,
        cantidad02: newcantidad02 , descripcion02: newdescripcion02, valor:newValor02,
        cantidad03: newcantidad03 , descripcion03: newdescripcion03, valor:newValor03,
        cantidad04: newcantidad04 , descripcion04: newdescripcion04, valor:newValor04
        });
      setCantidad(newcantidad);
      setDescripcion(newdescripcion);
      setValor(newValor);

      setCantidad01(newcantidad01);
      setDescripcion01(newdescripcion01);
      setValor01(newValor01);

      setCantidad02(newcantidad02);
      setDescripcion02(newdescripcion02);
      setValor02(newValor02);

      setCantidad03(newcantidad03);
      setDescripcion03(newdescripcion03);
      setValor03(newValor03);

      setCantidad04(newcantidad04);
      setDescripcion04(newdescripcion04);
      setValor04(newValor04);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setNewCantidad(cantidad);
    setNewDescripcion(descripcion);
    setNewValor(valor);

    setNewCantidad01(cantidad01);
    setNewDescripcion01(descripcion01);
    setNewValor01(valor01);

    setNewCantidad02(cantidad02);
    setNewDescripcion02(descripcion02);
    setNewValor02(valor02);

    setNewCantidad03(cantidad03);
    setNewDescripcion03(descripcion03);
    setNewValor03(valor03);

    setNewCantidad04(cantidad04);
    setNewDescripcion04(descripcion04);
    setNewValor04(valor04);
  }, [  cantidad,descripcion,valor,
        cantidad01,descripcion01,valor01,
        cantidad02,descripcion02,valor02,
        cantidad03,descripcion03,valor03,
        cantidad04,descripcion04,valor04,
    ]);

  return (
    <form onSubmit={handleSubmit} className='font-bold text-sm'>
      
      
      
      <br/>
      
      
      <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cantidad
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Detalle
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Valor
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newcantidad} onChange={(event) => setNewCantidad(event.target.value)} />
                    </label>
                </th>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newdescripcion} onChange={(event) => setNewDescripcion(event.target.value)} />
                    </label>
                </th>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newValor} onChange={(event) => setNewValor(event.target.value)} />
                    </label>
                </th>
                </tr>

                <tr>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newcantidad01} onChange={(event) => setNewCantidad01(event.target.value)} />
                    </label>
                </th>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newdescripcion01} onChange={(event) => setNewDescripcion01(event.target.value)} />
                    </label>
                </th>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newValor01} onChange={(event) => setNewValor01(event.target.value)} />
                    </label>
                </th>
                </tr>
                <tr>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newcantidad02} onChange={(event) => setNewCantidad02(event.target.value)} />
                    </label>
                </th>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newdescripcion02} onChange={(event) => setNewDescripcion02(event.target.value)} />
                    </label>
                </th>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newValor02} onChange={(event) => setNewValor02(event.target.value)} />
                    </label>
                </th>
                </tr>
                <tr>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newcantidad03} onChange={(event) => setNewCantidad03(event.target.value)} />
                    </label>
                </th>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newdescripcion03} onChange={(event) => setNewDescripcion03(event.target.value)} />
                    </label>
                </th>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newValor03} onChange={(event) => setNewValor03(event.target.value)} />
                    </label>
                </th>
                </tr>
                <tr>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newcantidad04} onChange={(event) => setNewCantidad04(event.target.value)} />
                    </label>
                </th>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newdescripcion04} onChange={(event) => setNewDescripcion04(event.target.value)} />
                    </label>
                </th>
                <th>
                    <label>
                        <input className='text-center' type="text" value={newValor04} onChange={(event) => setNewValor04(event.target.value)} />
                    </label>
                </th>
                </tr>

              </tbody>
            </table>
      

      <button type="submit" className='text-center m-auto w-full py-10 pb-0'>♻️</button>
    </form>
  );
}



           