import { useState, useEffect } from "react";
import Image from "next/image";
import useCombustible from "../hooks/useCombustible";

const ModalEquipo = () => {
  const { equipo, handleChangeModal, handleAgregarPedido, pedido } = useCombustible();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  useEffect(() => {
    if (pedido.some((pedidoState) => pedidoState.id === equipo.id)) {
      const equipoEdicion = pedido.find(
        (pedidoState) => pedidoState.id === equipo.id
      );
      setEdicion(true);
      setCantidad(equipoEdicion.cantidad);
    }
  }, [equipo, pedido]);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/2">
        <Image
          width={150}
          height={200}
          alt={`imagen equipo ${equipo.nombre}`}
          src={`/assets/img/${equipo.imagen}.jpg`}
        />
      </div>

      <div className="md:w-1/2">
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
        <h1 className="text-lg font-bold mt-1">{equipo.nombre}</h1>
        <p className="mt-1 font-black text-lg text-amber-500">{equipo.patente}</p>
        <p className="text-lg font-bold mt-1">{equipo.chofer}</p>
        
        
        <di className="text-center">
          <button
            type="button"
            className=" text-black font-bold text-sm py-2 hover:scale-110"
            onClick={() => handleAgregarPedido({ ...equipo, cantidad })}
          >
            {edicion ? "⏩ Siguiente ⏩" : "⏩ Siguiente ⏩"}
          </button>
        </di>
      </div>
    </div>
  );
};

export default ModalEquipo;