import { useState, useEffect } from "react";
import Image from "next/image";
import useCombustible from "../hooks/useCombustible";

const ModalObra = () => {
  const { obras, handleChangeModal, handleAgregarPedido03, pedido03 } = useCombustible();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if (pedido03.some((obraState) => obraState.id === obras.id)) {
      const equipoEdicion = pedido03.find(
        (obraState) => obraState.id === obras.id
      );
      setEdicion(true);
      setCantidad(equipoEdicion.cantidad);
    }
  }, [obras, pedido03]);

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
        <h1 className="text-lg font-bold mt-1">{obras.nombre}</h1>
        <p className="mt-1 font-black text-lg text-amber-500">{obras.cantidad} Litros</p>

        
        

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => handleAgregarPedido03({ ...obras})}
        >
          {edicion ? "Confirmar" : "Confirmar"}
        </button>
      </div>
    </div>
  );
};

export default ModalObra;