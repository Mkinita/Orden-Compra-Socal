import { useState, useEffect } from "react";
import Image from "next/image";
import useCombustible from "../hooks/useCombustible";

const ModalProveedor = () => {
  const { proveedor, handleChangeModal, handleAgregarOrdenAdmin, orden } = useCombustible();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if (orden.some((ordenState) => ordenState.id === proveedor.id)) {
      const equipoEdicion = orden.find(
        (ordenState) => ordenState.id === proveedor.id
      );
      setEdicion(true);
      setCantidad(equipoEdicion.cantidad);
    }
  }, [proveedor, orden]);

  return (
    <div className="md:flex gap-10">
      
      <div className="text-center">
        <div className="flex justify-end">
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
        <h1 className="text-lg font-bold mt-1">{proveedor.nombre}</h1>
        <p className="mt-1 font-black text-lg text-amber-500">{proveedor.rut}</p>
        {/* <p className="text-lg font-bold mt-1">{proveedor.direccion}</p>
        <p className="text-lg font-bold mt-1">{proveedor.fono}</p> */}
        
        

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => handleAgregarOrdenAdmin({ ...proveedor})}
        >
          {edicion ? "Confirmar" : "Confirmar"}
        </button>
      </div>
    </div>
  );
};

export default ModalProveedor;