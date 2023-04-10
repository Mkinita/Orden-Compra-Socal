import { useState, useEffect } from "react";
import useCombustible from "../hooks/useCombustible";
import {formatearDinero} from "helpers/index"
import { useRouter } from 'next/router'
import EditarOrdenGeneral from "./EditarOrdenGeneral"


const ModalProveedor = () => {
    const { ocpedidos, handleChangeModal, handleAgregarOrden, orden } = useCombustible();
    const [edicion, setEdicion] = useState(false);

        

    const 
    {
        id, nombre,  folio, emisor, obra,
        valor,cantidad,descripcion,
        valor01,cantidad01,descripcion01,
        valor02,cantidad02,descripcion02,
        valor03,cantidad03,descripcion03,
        valor04,cantidad04,descripcion04,
        nombre01,rut01,fecha
    } = ocpedidos


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



    const [isVisibleproveedor, setIsVisibleproveedor] = useState(false);
      
        const toggleVisibilityproveedor = () => {
          setIsVisibleproveedor(!isVisibleproveedor);
        };





  return (
    <div className="gap-10">
      
        <div className="text-center">
            <div className="flex justify-end pb-2">
                <button onClick={handleChangeModal}>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </button>
            </div>


            
            <div className={`flex flex-col ${isVisibleproveedor ? 'hidden' : ''}`}>              
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                            className="font-bold text-sm"
                            onClick={toggleVisibilityproveedor}
                            
                        >
                            {isVisibleproveedor ? '➖' : 'Editar ✏️'}
                        </button>
                        
            
                        <div className="">
            
                {isVisibleproveedor && (
            <div className="">
                <EditarOrdenGeneral key={ocpedidos.id} ocpedidos={ocpedidos} />
            </div>
                )}
            </div>
               
                
        </div>
  );
};

export default ModalProveedor;