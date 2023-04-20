import axios  from 'axios'
import { toast } from "react-toastify"
import {formatearDinero} from "helpers/index"
import {formatiarFecha} from "helpers/fecha"
import { useRouter } from 'next/router'
import EditarOrdenGeneral from "./EditarOrdenGeneral"
import React, { useState } from 'react';
import EditUserFormGeneralProveedor from './EditUserFormGeneralProveedor'



const OrdenGeneral = ({ocpedidos}) => {
    const {id, nombre, orden,  folio, emisor, obra,
        valor,cantidad,descripcion,
        valor01,cantidad01,descripcion01,
        valor02,cantidad02,descripcion02,
        valor03,cantidad03,descripcion03,
        valor04,cantidad04,descripcion04,
        nombre01,rut01,fechasolicitud
    
    } = ocpedidos


    const router = useRouter()

    const completarPago = async () => {

        try {

           await axios.post(`/api/admingeneral/${id}`)
            toast.success('Orden Autorizada 🔓')
            setTimeout(() =>{
              router.push('/orden-compra-general-autorizada')
          },1000)
        } catch (error) {
            toast.error('Hubo un error')
        }
    }




    const anularordendecompra = async () => {

      try {

         await axios.post(`/api/anularocgeneral/${id}`)
          toast.success('Orden Anulada 🔓')
      } catch (error) {
          toast.error('Hubo un error')
      }
  }



  const [isVisible, setIsVisible] = useState(false);
      
        const toggleVisibility = () => {
          setIsVisible(!isVisible);
        };


        const [isVisibles, setIsVisibles] = useState(true);

        const toggleVisibilitys = () => {
          setIsVisibles(!isVisibles);
        };


        const [isVisibleproveedor, setIsVisibleproveedor] = useState(false);
      
        const toggleVisibilityproveedor = () => {
          setIsVisibleproveedor(!isVisibleproveedor);
        };




    const cantidad1 =cantidad;
    const valor1 = valor;
    const cantidadxvalor = (cantidad1) * (valor1);
  
    const cantidad0 = cantidad01;
    const valor0 = valor01;
    const cantidadxvalor01 = (cantidad0) * (valor0);
    
  
    
    
    const cantidad2 = cantidad02;
    const valor2 = valor02;
    const cantidadxvalor02 = (cantidad2) * (valor2);
  
  
    const cantidad3 = cantidad03;
    const valor3 =  valor03;
    const cantidadxvalor03 = (cantidad3) * (valor3);
  
  
    const cantidad4 = cantidad04;
    const valor4 = valor04;
    const cantidadxvalor04 = (cantidad4) * (valor4);



    const subtotal = cantidadxvalor + cantidadxvalor01 + cantidadxvalor03 + cantidadxvalor04
  const iva = subtotal * 0.19 
  const totaldubiva = subtotal + iva


    

    
  return (
    <>
    <div>
    <div className="border p-10 space-y-2">
      <div className=''></div>
        
        <div>
          
            {orden.map(oc => (
                <div key={oc.id}
                className=""
                >
                  <div className="py-2  space-y-1">
            <div className="grid md:grid-cols-3 gap-4 border-b">
            <div className='py-1 border-b last-of-type:border-0 items-center'>
            <h3 className="text-lg font-bold">Nº O.C: {id}</h3>
            <p className="text-sm font-bold">Fecha: {formatiarFecha(fechasolicitud)}</p>
            <p className="text-sm font-bold">Emisor: {emisor}</p>
            <p className="text-sm font-bold">Solicitante: {nombre}</p>
            <p className="text-sm font-bold ">Obra: {obra}</p>
            </div>
                <div className="">
                  
                <header>
                  
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold">Proveedor</h3>
                        <p className="text-xs font-bold">Nombre: {oc.nombre} {nombre01}</p>
                        <p className="text-xs font-bold">Rut: {oc.rut} {rut01}</p>
                        <p className="text-xs font-bold">-</p>
                        <p className="text-xs font-bold">{oc.chofer}</p>
                        
                    </div>
                    <button
                            className="font-bold text-sm"
                            onClick={toggleVisibilityproveedor}
                            
                        >
                            {isVisibleproveedor ? '➖' : 'Editar ✏️'}
                        </button>
                        </header>
                        </div>
            <div>
                        <div className="">
            
                {isVisibleproveedor && (
            <div className="">
                <EditUserFormGeneralProveedor key={ocpedidos.id} ocpedidos={ocpedidos} />
            </div>
                )}
            </div>
                </div>
                </div>
                </div>
                </div>
                ))}

                

            




                
                    
                    


                    <div className={isVisibles ? 'block' : 'hidden'}>
                    <div className="flex flex-col ">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table  className="min-w-full divide-y divide-gray-200">
           
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
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <th>{cantidad}</th>
                <th>{descripcion}</th>
                <th>{valor}</th>
                <th>{formatearDinero(cantidadxvalor)}</th>
                </tr>
                <tr>
                <th>{cantidad01}</th>
                <th>{descripcion01}</th>
                <th>{valor01}</th>
                <th>{formatearDinero(cantidadxvalor01)}</th>
                </tr>
                <tr>
                <th>{cantidad02}</th>
                <th>{descripcion02}</th>
                <th>{valor02}</th>
                <th>{formatearDinero(cantidadxvalor02)}</th>
                </tr>
                <tr>
                <th>{cantidad03}</th>
                <th>{descripcion03}</th>
                <th>{valor03}</th>
                <th>{formatearDinero(cantidadxvalor03)}</th>
                </tr>
                <tr>
                <th>{cantidad04}</th>
                <th>{descripcion04}</th>
                <th>{valor04}</th>
                <th>{formatearDinero(cantidadxvalor04)}</th>
                </tr>
                <tr>
                <th></th>
                <th></th>
                <th>SUBTOTAL</th>
                <th>{formatearDinero(subtotal)}</th>
                </tr>
                <tr>
                <th></th>
                <th></th>
                <th>IVA 19%</th>
                <th>{formatearDinero(iva)}</th>
                </tr>
                <tr>
                <th></th>
                <th></th>
                <th>TOTAL</th>
                <th>{formatearDinero(totaldubiva)}</th>
                </tr>
                
              </tbody>
            </table>
            <button
              className="font-bold text-sm w-full py-5 pb-0 hover:scale-110"
              onClick={() => {
                toggleVisibility();
                // toggleVisibilitys();
              }}
                            
            >
              {isVisible ? '➖' : 'Editar ✏️'}
            </button>
                        
                        
            </div>        
            </div>
            <div>
            <div className="">
            
                {isVisible && (
            <div className="p-4">
                <EditarOrdenGeneral key={ocpedidos.id} ocpedidos={ocpedidos} />
            </div>
                )}
          </div>
        </div>
      </div>
    </div>
    </div>
            
        </div>

        <div className="md:flex md:items-center md:justify-between my-10">
                {/* <p className="mt-5 font-black text-4xl text-amber-500">Total a Pagar: {formatearDinero(total)}</p> */}
                
                <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold"
                type="button"
                onClick={completarPago}
                >
                Autorizar

                </button>  
        </div>


        <div className="md:flex md:items-center md:justify-between my-10">
                {/* <p className="mt-5 font-black text-4xl text-amber-500">Total a Pagar: {formatearDinero(total)}</p> */}
                
                <button
                className="w-full bg-red-600 hover:bg-red-700 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold"
                type="button"
                onClick={anularordendecompra}
                >
                Anular

                </button>  
        </div>
        <di className="p-5"></di>

    </div>
    </div>
    
    </>
  )
}

export default OrdenGeneral