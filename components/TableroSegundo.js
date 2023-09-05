import useSWR from 'swr'
import axios from 'axios'
import {useState, useEffect, useRef} from 'react'

import Image from 'next/image'
import Link from "next/link"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import Chart from "chart.js/auto";






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


    const fetcherEntega = () => axios('/api/ordenes-autorizadas-false').then(datos => datos.data)
    const { data:dataEntega, error:errorEntega, isLoading:isLoadingEntega } = useSWR('/api/ordenes-autorizadas-false',fetcherEntega,{refreshInterval: 100} )
  
    useEffect(() => {
      if (dataEntega) {
        setEntregaPendientes(dataEntega.length);
      }
    }, [dataEntega]);

    

    const commercesChartRef = useRef(null);

  useEffect(() => {
    // Datos de ejemplo para el gráfico de comercios
    const commerceData = {
      labels: ["Comercios Activos", "Comercios Inactivos"],
      datasets: [
        {
          data: [80, 20], // Cambia estos valores con tus datos reales
          backgroundColor: ["#FFCE56", "#4BC0C0"],
        },
      ],
    };

    // Configuración del gráfico de comercios
    const commerceConfig = {
      type: "doughnut", // Tipo de gráfico circular
      data: commerceData,
    };

    // Obtén la referencia al elemento canvas
    const commerceCtx = commercesChartRef.current;

    // Verifica si ya existe un gráfico en el elemento canvas
    if (commerceCtx) {
      const existingChart = Chart.getChart(commerceCtx);
      if (existingChart) {
        existingChart.destroy(); // Destruye el gráfico existente si lo hay
      }
    }

    // Crea el nuevo gráfico de comercios
    if (commerceCtx) {
      new Chart(commerceCtx, commerceConfig);
    }
  }, []);




  
  

  

  return (
    
    <>
      
         
        

        <div className='grid grid-cols-1 md:flex px-2 gap-2'>

        <div className='w-full md:w-1/4 p-2 shadow rounded-lg'>
            <p className='text-left font-bold text-sm pb-5'>Ordenes Por Fecha🗓️</p>
            <ul className="text-left overflow-y-auto max-h-20 grid gap-1 grid-cols-1 px-2">
                    <li className='py-1 hover:animate-pulse'>
                        <Link href="/listado-oc-abril" className="">
                                Abril 2023
                            <span className=""> 📅</span>
                        </Link>
                    </li>

                    <li className='py-1 hover:animate-pulse'>
                        <Link href="/listado-oc-abril" className="">
                                Mayo 2023
                            <span className=""> 📅</span>
                        </Link>
                    </li>

                    <li className='py-1 hover:animate-pulse'>
                        <Link href="/listado-oc-abril" className="">
                                Junio 2023
                            <span className=""> 📅</span>
                        </Link>
                    </li>

                    <li className='py-1 hover:animate-pulse'>
                        <Link href="/listado-oc-abril" className="">
                                Julio 2023
                            <span className=""> 📅</span>
                        </Link>
                    </li>

                    <li className='py-1 hover:animate-pulse'>
                        <Link href="/listado-oc-abril" className="">
                                Agosto 2023
                            <span className=""> 📅</span>
                        </Link>
                    </li>

                    <li className='py-1 hover:animate-pulse'>
                        <Link href="/listado-oc-abril" className="">
                                Septiembre 2023
                            <span className=""> 📅</span>
                        </Link>
                    </li>
                </ul>
        </div>

        <div className='w-full md:w-3/4 p-2 shadow rounded-lg'>

        </div>
        
        </div>

        {/* <div class="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
                
                <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                    <h2 class="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
                    <div class="my-1"></div>
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                    <div class="chart-container" style={{position: 'relative; height:150px; width:100%'}}>
                        
                        <canvas id="usersChart"></canvas>
                    </div>
                </div>

                
                <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                    <h2 class="text-gray-500 text-lg font-semibold pb-1">Comercios</h2>
                    <div class="my-1"></div>
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                    <div class="chart-container" style={{position: 'relative; height:150px; width:100%'}}>
                        
                        <canvas id="commercesChart"></canvas>
                    </div>
                </div>
            </div> */}


<div className="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
      <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
        <h2 className="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
        <div className="my-1"></div>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
        <div className="chart-container relative h-96 w-full">
          <canvas id="usersChart"></canvas>
        </div>
      </div>

      <div className="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
        <h2 className="text-gray-500 text-lg font-semibold pb-1">Comercios</h2>
        <div className="my-1"></div>
        <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
        <div className="chart-container relative h-96 w-full">
          <canvas id="commercesChart"></canvas>
        </div>
      </div>
    </div>

       
           
        
      </>

      

  )
}

