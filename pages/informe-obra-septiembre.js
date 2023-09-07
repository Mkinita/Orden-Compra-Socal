import LayoutInicioAdminGeneral from "../layout/LayoutInicioAdminGeneral"
import useSWR from 'swr'
import axios from 'axios'
import Link from "next/link"
import InformeObra from '../components/InformeObra'
import TablaGeneralSeptiembre from '@/components/TablaGeneralSeptiembre'
import useCombustible from "../hooks/useCombustible"
import {useState, useEffect} from 'react'
import {formatearDinero} from "helpers/index"







export default function Admin() {

  const {obra,setObra} = useCombustible()
  const [buscar, setBuscar] = useState(' ');
  const [filtro, setFiltro] = useState('');
  const [datos, setDatos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [options, setOptions] = useState([]);
  const [totalVolumen, setTotalVolumen] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
   
      
  

  const fetcher = () => axios('/api/listado-ordenes-septiembre').then(datos => datos.data)
  const { data, error} = useSWR('/api/listado-ordenes-septiembre',fetcher,{refreshInterval: 100} )

  useEffect(() => {
    fetch('/api/faenas')
    .then(response => response.json())
    .then(data => setOptions(data))
    .catch(error => console.log(error));
  },  []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

    try {
      let url = '/api/listado-ordenes-septiembre';
      const response = await fetch(url);
      const data = await response.json();
      setDatos(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error al cargar datos:', error);
      setIsLoading(false);
    }
    };
    fetchData();
  }, [filtro]);

  

  const buscador = (e) => {
    setBuscar(e.target.value);
  };

  const results = buscar === ''
  ? datos
  : datos.filter((dato) =>
    dato.obra.toLowerCase() === obra.toLowerCase()
  );

  const totalgeneral = () => {
    let suma = 0;
    let totaldubiva = 0;
    results.forEach((ocpedidos) => {
      const cantidad = ocpedidos.cantidad || 0;
      const valor = ocpedidos.valor || 0;
      const total = cantidad * valor;
      const resultado = total === 0 ? 0 : total;
    
      const cantidad01 = ocpedidos.cantidad01 || 0;
      const valor01 = ocpedidos.valor01 || 0;
      const total01 = cantidad01 * valor01;
      const resultado01 = total01 === 0 ? 0 : total01;
    
      const cantidad02 = ocpedidos.cantidad02 || 0;
      const valor02 = ocpedidos.valor02 || 0;
      const total02 = cantidad02 * valor02;
      const resultado02 = total02 === 0 ? 0 : total02;
    
      const cantidad03 = ocpedidos.cantidad03 || 0;
      const valor03 = ocpedidos.valor03 || 0;
      const total03 = cantidad03 * valor03;
      const resultado03 = total03 === 0 ? 0 : total03;
    
      const cantidad04 = ocpedidos.cantidad04 || 0;
      const valor04 = ocpedidos.valor04 || 0;
      const total04 = cantidad04 * valor04;
      const resultado04 = total04 === 0 ? 0 : total04;
    
      const cantidad05 = ocpedidos.cantidad05 || 0;
      const valor05 = ocpedidos.valor05 || 0;
      const total05 = cantidad05 * valor05;
      const resultado05 = total05 === 0 ? 0 : total05;
    
      const cantidad06 = ocpedidos.cantidad06 || 0;
      const valor06 = ocpedidos.valor06 || 0;
      const total06 = cantidad06 * valor06;
      const resultado06 = total06 === 0 ? 0 : total06;
    
      const cantidad07 = ocpedidos.cantidad07 || 0;
      const valor07 = ocpedidos.valor07 || 0;
      const total07 = cantidad07 * valor07;
      const resultado07 = total07 === 0 ? 0 : total07;
    
      const cantidad08 = ocpedidos.cantidad08 || 0;
      const valor08 = ocpedidos.valor08 || 0;
      const total08 = cantidad08 * valor08;
      const resultado08 = total08 === 0 ? 0 : total08;
    
      const cantidad09 = ocpedidos.cantidad09 || 0;
      const valor09 = ocpedidos.valor09 || 0;
      const total09 = cantidad09 * valor09;
      const resultado09 = total09 === 0 ? 0 : total09;
    
      suma += resultado + resultado01 + resultado02 + resultado03 + resultado04 + resultado05 + resultado06 + resultado07 + resultado08 + resultado09;
  });

  const iva = suma * 0.19;
    totaldubiva = suma + iva;
    setTotalVolumen(totaldubiva);
  };
    
  function calcularVolumen() {
    totalgeneral();
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function GenerarInforme (){
    totalgeneral();
    toggleVisibility();
  }
  return(
    <LayoutInicioAdminGeneral pagina={'Listado-OC'}>
      <h1 className="text-gray-500 text-lg font-semibold pb-8">Informe De Compras Por Obra</h1>
      <div className='mt-auto hidden'>
        <input value={buscar}  onChange={buscador} type="text" placeholder='Filtra Por Obra' className=''/>
      </div>
      
      

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="shadow rounded-lg p-2">
            <div>
              <div className="grid grid-cols-2 gap-4">
                  <div>
                  <p className="font-semibold text-gray-600">Total Compras</p>
                      <h2 class="text-2xl font-bold text-gray-600">{formatearDinero(totalVolumen)}</h2>
                  </div>
                  
                    <img src="https://www.emprenderconactitud.com/img/Wallet.png" className="h-24 md:h-20 w-38" alt="wallet"></img>
              </div>
              </div>
          </div>
          <div className="shadow rounded-lg p-2">
          <div className=''>
          <p className="font-semibold text-gray-600">Obras</p>
        <select
          id="area"
          className="bg-gray-50 w-full p-2 rounded-md"
          value={obra}
          onChange={e => setObra(e.target.value)}
        >
          <option value="">-</option>
          {options.map(option => (
          <option key={option.value} value={option.value}>{option.nombre}</option>
          ))}
        </select>   
      </div>
          </div>
          <div className="shadow rounded-lg p-2">
          <div className='grid grid-cols-1 gap-2'>
        <button className="w-3/4 m-auto border border-green-500 bg-green-500 text-white rounded-md px-4 py-1  transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline" onClick={GenerarInforme}>
          {isVisible ? 'Nuevo Informe' : 'Generar Informe'}
          </button>
        <Link href="/construyendo" className="w-3/4 m-auto border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-1 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline" onClick={calcularVolumen}>Meses Anteriores</Link>
      </div>
          </div>
        </div>

        
        {isVisible && (
      <div className="bg-white rounded-lg p-4 shadow-md my-4">
      <TablaGeneralSeptiembre/>
      {data && data.length ? results.map(ocpedidos =>
        <InformeObra
          key={ocpedidos.id}
          ocpedidos={ocpedidos}
        />
        ):<p>No Hay Ordenes Pendientes</p>
      }

    </div>
        )}
      
      

      
    </LayoutInicioAdminGeneral>  
  )

    
}


