import {formatiarFecha} from "helpers/fecha"


const ListadoOc = ({ocpedidos}) => {
    const {id, nombre, total, orden, fechasolicitud, folio, descripcion,obra,emisor} = ocpedidos



    const formatoNumero = (num) => {
        return num.toString().slice(-4);
      }

  return (
    
    <>
    
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                {orden.map(oc => (
                    <tr key={oc.id}>
                        
                        <td className="border px-4 py-2 w-1/12">{id}</td>
                        <td className="border px-4 py-2 w-1/12">{fechasolicitud}</td>
                        <td className="border px-4 py-2 w-1/6">{emisor}</td>
                        <td className="border px-4 py-2 w-1/6">{nombre}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default ListadoOc