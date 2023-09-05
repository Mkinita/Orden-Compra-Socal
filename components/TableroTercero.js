import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import useSWR from 'swr'
import axios from 'axios'
import Link from "next/link";


const TableroTercero = () => {
  const usersChartRef = useRef(null);
  

  const [solicitudesPendientes, setSolicitudesPendientes] = useState(0);
  

  const fetcher = () => axios('/api/usur').then(datos => datos.data);
  const { data, error, isLoading } = useSWR('/api/usur', fetcher, { refreshInterval: 100 });
  
  useEffect(() => {
    if (data) {
      setSolicitudesPendientes(data.length);
      createUsersChart();
    }
  }, [data]);

  

  

  const createUsersChart = () => {
    const usersCtx = usersChartRef.current;

    // Verifica si ya existe un gráfico en el elemento canvas
    if (usersCtx) {
      const existingChart = Chart.getChart(usersCtx);
      if (existingChart) {
        existingChart.destroy(); // Destruye el gráfico existente si lo hay
      }
    }

    // Continúa con la creación del nuevo gráfico
    const userChartData = {
        labels: ["Anuladas", "Realizadas"],
        datasets: [
          {
            data: [
              data.filter(ocpedidos => ocpedidos.anular).length,
              data.filter(ocpedidos => !ocpedidos.anular).length
            ],
            backgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      };

    const userChartConfig = {
      type: "doughnut",
      data: userChartData,
    };

    new Chart(usersCtx, userChartConfig);
    
  };

 


  return (

    <>
    <div className="mt-8">
      <div className="bg-white p-4 shadow rounded-lg">
      <div className="flex items-center space-x-2">
  <h2 className="text-gray-500 text-lg font-semibold pb-1 w-1/2">Anuladas</h2>
  <Link href="/listado-oc-general-admin" className="w-1/2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded text-center">
    Ver más
  </Link>
</div>
        
        
        <div className="my-1"></div>
        
                    <div class="my-1"></div> 
                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
        <div className="chart-container relative h-52 w-full px-10">
        <canvas
    id="usersChart"
    ref={usersChartRef}
    style={{
      boxSizing: 'border-box',
      display: 'block',
      height: '208px',
      width: '208px',
    }}
  ></canvas>
  
          
        </div>
        
      </div>
    </div>

{/* <div class="mt-8 bg-white p-4 shadow rounded-lg">
<div class="bg-white p-4 rounded-md mt-4">
    <h2 class="text-gray-500 text-lg font-semibold pb-4">Transacciones</h2>
    <div class="my-1"></div>
    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
    <table class="w-full table-auto text-sm">
        <thead>
            <tr class="text-sm leading-normal">
                <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha</th>
                <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Monto</th>
            </tr>
        </thead>
        <tbody>
            <tr class="hover:bg-grey-lighter">
                <td class="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                <td class="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                <td class="py-2 px-4 border-b border-grey-light text-right">$1500</td>
            </tr>
        <tr class="hover:bg-grey-lighter">
            <td class="py-2 px-4 border-b border-grey-light">Pedro Hernández</td>
            <td class="py-2 px-4 border-b border-grey-light">02/08/2023</td>
            <td class="py-2 px-4 border-b border-grey-light text-right">$1950</td>
        </tr>
        <tr class="hover:bg-grey-lighter">
            <td class="py-2 px-4 border-b border-grey-light">Sara Ramírez</td>
            <td class="py-2 px-4 border-b border-grey-light">03/08/2023</td>
            <td class="py-2 px-4 border-b border-grey-light text-right">$1850</td>
        </tr>
        <tr class="hover:bg-grey-lighter">
            <td class="py-2 px-4 border-b border-grey-light">Daniel Torres</td>
            <td class="py-2 px-4 border-b border-grey-light">04/08/2023</td>
            <td class="py-2 px-4 border-b border-grey-light text-right">$2300</td>
        </tr>
        </tbody>
    </table>
    
    <div class="text-right mt-4">
        
            <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                Ver más
            </button>
        </div>
    </div>
    </div>

    <div class="mt-8 bg-white p-4 shadow rounded-lg">
                <h2 class="text-gray-500 text-lg font-semibold pb-4">Autorizaciones Pendientes</h2>
                <div class="my-1"></div>
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                <table class="w-full table-auto text-sm">
                    <thead>
                        <tr class="text-sm leading-normal">
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Foto</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Rol</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light"></td>
                            <td class="py-2 px-4 border-b border-grey-light">Juan Pérez</td>
                            <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                        </tr>
                        
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light"></td>
                            <td class="py-2 px-4 border-b border-grey-light">María Gómez</td>
                            <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                        </tr>
                        
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light"></td>
                            <td class="py-2 px-4 border-b border-grey-light">Carlos López</td>
                            <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light"></td>
                            <td class="py-2 px-4 border-b border-grey-light">Laura Torres</td>
                            <td class="py-2 px-4 border-b border-grey-light">Comercio</td>
                        </tr>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light"></td>
                            <td class="py-2 px-4 border-b border-grey-light">Ana Ramírez</td>
                            <td class="py-2 px-4 border-b border-grey-light">Usuario</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="text-right mt-4">
                    <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                        Ver más
                    </button>
                </div> */}
                


</>
  );
};

export default TableroTercero;


