import {formatiarFecha} from "helpers/fecha"
import Link from "next/link"


const ListadoOc = ({ocpedidos}) => {
    const {id, nombre, total, orden, fecha, folio, descripcion,obra,emisor} = ocpedidos



    

  return (
    
    <>
    
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                {orden.map(oc => (
                    <tr key={oc.id}>
                        
                        <td className="border px-4 py-2 w-1/12">{id}</td>
                        <td className="border px-4 py-2 w-1/12">{formatiarFecha(fecha)}</td>
                        <td className="border px-4 py-2 w-1/6">{emisor}</td>
                        <td className="border px-4 py-2 w-1/6">{nombre}</td>
                        <td className="border px-4 py-2 w-1/6">{obra}</td>
                        <td className="border px-4 py-2 w-1/6">{oc.nombre}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default ListadoOc
