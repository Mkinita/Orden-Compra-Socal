import axios  from 'axios'
import { toast } from "react-toastify"
import {formatearDinero} from "helpers/index"
import {formatiarFecha} from "helpers/fecha"
import { useRouter } from 'next/router'
import EditarOrdenGeneral from "./EditarOrdenGeneral"
import React, { useState } from 'react';
import EditUserFormGeneralProveedor from './EditUserFormGeneralProveedor'
import useCombustible from '../hooks/useCombustible';

const Proveedor = ({ocpedidos}) => {

    const {id, nombre, orden,  folio, emisor, obra,
        valor,cantidad,descripcion,
        valor01,cantidad01,descripcion01,
        valor02,cantidad02,descripcion02,
        valor03,cantidad03,descripcion03,
        valor04,cantidad04,descripcion04,
        nombre01,rut01,fecha,fechasolicitud
    
    } = ocpedidos

    const {handlesetOcpedidos, handleChangeModal} =useCombustible()


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
    
    <div className="border p-1 w-full h-full rounded-3xl">
      
      
        <div className='p-1 text-center'>
            <div className="space-y-1">
                <div className="">
                    <div className='py-1 border-b last-of-type:border-0 items-center'>
                        <h3 className="text-lg font-bold">Nº O.C: {id}</h3>
                        {/* <p className="text-sm font-bold">Fecha Solicitud: {formatiarFecha(fecha)}</p> */}
                        <p className="text-sm font-bold">Fecha: {fechasolicitud}</p>
                        <p className="text-sm font-bold">Emisor: {emisor}</p>
                        <p className="text-sm font-bold">Solicitante: {nombre}</p>
                        <p className="text-sm font-bold ">Obra: {obra}</p>
                    </div>
                </div>
            </div>

            {orden.map(oc => (
            <div key={oc.id} className="mi-clase">
              <div className='p-1 text-center'>
              <h3 className="text-lg font-bold">Proveedor</h3>
                        <p className="text-xs font-bold">Nombre: {oc.nombre} {nombre01}</p>
                        <p className="text-xs font-bold">Rut: {oc.rut} {rut01}</p>
                        <p className="text-xs font-bold">-</p>
                        <p className="text-xs font-bold">{oc.chofer}</p>


                        <button
                            className="font-bold text-sm"
                            onClick={toggleVisibilityproveedor}
                            
                        >
                            {isVisibleproveedor ? '➖' : 'Editar ✏️'}
                        </button>

                        {isVisibleproveedor && (
            <div className="">
                <EditUserFormGeneralProveedor key={ocpedidos.id} ocpedidos={ocpedidos} />
            </div>
                )}
          
        
                    </div>
                  </div>
                ))}

            



            




            <div className="flex py-2 text-sm">


            <button
                type='button'
                className='flex-1 bg-indigo-600 hover:bg-indigo-700 text-white mt-1 md:mt-0 py-3 px-5  font-bold ml-1 rounded-3xl'
                onClick={()=> {
                handleChangeModal();
                handlesetOcpedidos(ocpedidos)
                }}
            >
                Detalle
            </button>
            
              <button className="flex-1 bg-lime-600 hover:bg-lime-700 text-white mt-1 md:mt-0 py-3 px-5  font-bold ml-1 rounded-3xl" type="button" onClick={completarPago}>
                Autorizar
              </button>
              <button className="flex-1 bg-red-600 hover:bg-red-700 text-white mt-1 md:mt-0 py-3 px-5  font-bold ml-1 rounded-3xl" type="button" onClick={anularordendecompra}>
                Anular
              </button>


              
            </div>

    


            

      </div>
      
    </div>

    
  )
}

export default Proveedor