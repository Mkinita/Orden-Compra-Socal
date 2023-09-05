import useSWR from 'swr'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from "next/link"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"





export default function Home() {

  const [solicitudesPendientes, setSolicitudesPendientes] = useState(0);
  const [ordenespendientes, setOrdenesPendientes] = useState(0);
  const [entregapendientes, setEntregaPendientes] = useState(0);

  const fetcher = () => axios('/api/ordenesgenerales').then(datos => datos.data);
  const { data, error, isLoading } = useSWR('/api/ordenesgenerales', fetcher, { refreshInterval: 100 });
  
  useEffect(() => {
    if (data) {
      setSolicitudesPendientes(data.length);
    }
  }, [data]);




  const fetcherOrden = () => axios('/api/listado-ordenes-generales').then(datos => datos.data)
  const { data:dataOrden, error:errorOrden, isLoading:isLoadingOrden } = useSWR('/api/listado-ordenes-generales',fetcherOrden,{refreshInterval: 100}); 

  useEffect(() => {
    if (dataOrden) {
      setOrdenesPendientes(dataOrden.length);
    }
  }, [dataOrden]);


    




  
  

  

  return (
    
    <>
      
         <h1 className='py-2 text-center font-bold text-lg'>Ordenes De Compras</h1>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-3 py-8 px-2 pb-2'>
        
        <div className="border border-solid rounded-lg text-center shadow grid gap-1 grid-cols-2 p-2">
          <div>
          <p className="text-center uppercase font-bold text-xl">Ordenes</p>
          <p className="text-center text-lg">Pendientes</p>
          <Link href="/autorizarordengeneraladminprueba" className="">
            <span className="">Revisar 🔐</span>
          </Link>
          </div>
          <div style={{ width: '50%', margin: 'auto',}}>
            <CircularProgressbar
              styles={buildStyles({
              pathColor: solicitudesPendientes <= 2 ? '#22c55e' : '#DC2626',
              trailColor: '#F5F5F5',
              textColor: '#0a0a0a',
              textSize:'26px'                            
              })}
              value={100}
              text={`${solicitudesPendientes}`}
            />

          </div>
          
        </div>

        <div className="border border-solid rounded-lg text-center shadow grid gap-1 grid-cols-2 p-2">
          <div>
          <p className="text-center uppercase font-bold text-xl">Ordenes</p>
          <p className="text-center text-lg">Autorizadas</p>
          <Link href="/listado-oc-general-ocgeneral" className="">
            <span className="">Revisar 🔑</span>
          </Link>
          </div>
          <div style={{ width: '50%', margin: 'auto', textSize:'24px',}}>
            <CircularProgressbar
              styles={buildStyles({
              pathColor: ordenespendientes >= 0 ? '#22c55e' : '#DC2626',
              trailColor: '#F5F5F5',
              textColor: '#0a0a0a',
              textSize:'26px'                            
              })}
              value={100}
              text={`${ordenespendientes}`}
            />

          </div>
          
        </div>

        <div className="border border-solid rounded-lg text-center shadow grid gap-1 grid-cols-2 p-2">
          <div>
          <p className="text-center uppercase font-bold text-xl">Generar</p>
          <p className="text-center text-lg">Orden </p>
          <Link href="/proveedores-admin" className="">
            <span className="">Generar ➕</span>
          </Link>
          </div>
          <div className='py-5 text-4xl'>
            📝
          </div>
          
        </div>
      </div>
      </>

      

  )
}

