import React from 'react'
import useSWR from 'swr'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import LayoutInicioAdminGeneral from '../layout/LayoutInicioAdminGeneral'
import TableroPrimego from '@/components/TableroPrimego'
import TableroTercero from '@/components/TableroTercero'
import TableroCuarto from '@/components/TableroCuarto'
import TableroQuinto from '@/components/TableroQuinto'
import TableroSecto from '@/components/TableroSecto'
import TableroSectimo from '@/components/TableroSectimo'



const tablero = () => {

  const fetcher = () => axios('/api/proveedores-tres').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/proveedores-tres',fetcher,{refreshInterval: 100} )

  const fetcherFaenas = () => axios('/api/faenascuatro').then(datos => datos.data)
  const { data:dataFaena, error:errorFaena, isLoading:isLoadingFaena } = useSWR('/api/faenascuatro',fetcherFaenas,{refreshInterval: 100} )

  const fetcherOcpedido = () => axios('/api/listado-ordenes-generales-cuatro').then(datos => datos.data)
  const { data:dataOcpedido, error:errorOcpedido, isLoading:isLoadingOcpedido } = useSWR('/api/listado-ordenes-generales-cuatro',fetcherOcpedido,{refreshInterval: 100} )

  const fetcherUsuarios = () => axios('/api/usuarios-cuatro').then(datos => datos.data)
    const { data:dataUsuarios, error:errorUsuarios, isLoading:isLoadingUsuarios } = useSWR('/api/usuarios-cuatro',fetcherUsuarios,{refreshInterval: 100} )

  
  
  return (
    <LayoutInicioAdminGeneral pagina={`Inicio - Inicio`}>
      <Head>
        <meta name="description" content="Carlos Jerez" />
        <link rel="icon" href="/AGRF.png"/>
        <title>Inicio</title>
      </Head>
      <div>
        <TableroPrimego/>
      </div>
      <div className='gird grid-cols-1 md:flex space-x-4'>
        <div className='w-full md:w-1/3'><TableroTercero/></div> 
        <div className='w-full md:w-2/3'>
          
        <div class="mt-8 bg-white p-4 shadow rounded-lg">
              <div class="bg-white ">
                <h2 className="text-gray-500 text-lg font-semibold pb-2">Informe Por Faena</h2>
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                  <div class="">
                    <table class="w-full table-auto text-sm">
                      <thead>
                        <tr class="text-sm leading-normal">
                          <th class=" px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left w-1/3">Faena</th>
                          <th class=" px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left w-1/3">Fecha</th>
                          <th class=" px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left w-1/3">Valor</th>
                        </tr>
                      </thead> 
                    </table>
                    {dataOcpedido && dataOcpedido.length ? dataOcpedido.map(ocpedidos =>   
                      <TableroSecto
                        key={ocpedidos.id}
                        ocpedidos={ocpedidos}
                      />
                    ):<p>No Hay Ordenes Pendientes</p>}
                    <div class="text-right mt-4">
                      <Link href="/construyendo" class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                        Ver más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
        <div className='gird grid-cols-1 md:flex space-x-4'>
        <div className='w-full md:w-1/3'>
          <div class="mt-8 bg-white p-4 shadow rounded-lg">
              <div class="bg-white ">
                <h2 className="text-gray-500 text-lg font-semibold pb-2">Proveedores</h2>
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                  <div class="">
                    <table class="w-full table-auto text-sm">
                      <thead>
                        <tr class="text-sm leading-normal">
                          <th class=" px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Nombre</th>
                        </tr>
                      </thead> 
                    </table>
                    {data && data.length ? data.map(proveedor =>   
                      <TableroCuarto
                        key={proveedor.id}
                        proveedor={proveedor}
                      />
                    ):<p>No Hay Ordenes Pendientes</p>}
                    <div class="text-right mt-4">
                      <Link href="/listadoproveedoresadmin" class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                        Ver más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3'>
          <div class="mt-8 bg-white p-4 shadow rounded-lg">
              <div class="bg-white ">
                <h2 className="text-gray-500 text-lg font-semibold pb-2">Faenas</h2>
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                  <div class="">
                    <table class="w-full table-auto text-sm">
                      <thead>
                        <tr class="text-sm leading-normal">
                          <th class=" px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Nombre</th>
                        </tr>
                      </thead> 
                    </table>
                    {dataFaena && dataFaena.length ? dataFaena.map(faenas =>   
                      <TableroQuinto
                        key={faenas.id}
                        faenas={faenas}
                      />
                    ):<p>No Hay Ordenes Pendientes</p>}
                    <div class="text-right mt-4">
                      <Link href="/listado-faenas" class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                        Ver más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>

            <div className='w-full md:w-1/3'>
            <div class="mt-8 bg-white p-4 shadow rounded-lg">
              <div class="bg-white ">
                <h2 className="text-gray-500 text-lg font-semibold pb-2">Usuarios</h2>
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                  <div class="">
                    <table class="w-full table-auto text-sm">
                      <thead>
                        <tr class="text-sm leading-normal">
                          <th class=" px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-left">Nombre</th>
                        </tr>
                      </thead> 
                    </table>
                    {dataUsuarios && dataUsuarios.length ? dataUsuarios.map(user =>   
                      <TableroSectimo
                        key={user.id}
                        user={user}
                      />
                    ):<p>No Hay Ordenes Pendientes</p>}
                    <div class="text-right mt-4">
                      <Link href="/listado-usuarios" class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                        Ver más
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
            
            
            
          
        </div>    
    </LayoutInicioAdminGeneral>
  )
}

export default tablero
