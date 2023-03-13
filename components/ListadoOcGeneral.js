import {formatiarFecha} from "helpers/fecha"


const ListadoOc = ({ocpedidos}) => {
    const {id, nombre, total, orden, fecha, folio, descripcion,obra,emisor} = ocpedidos



    const formatoNumero = (num) => {
        return num.toString().slice(-4);
      }
    //   const formattedNumber = folio;


    

    
  return (
    
    <>
    
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                {orden.map(oc => (
                    <tr key={oc.id}>
                        
                        <td className="border px-4 py-2">{id}</td>
                        <td className="border px-4 py-2">{formatiarFecha(fecha)}</td>
                        <td className="border px-4 py-2">{emisor}</td>
                        <td className="border px-4 py-2">{nombre}</td>
                        <td className="border px-4 py-2">{obra}</td>
                        <td className="border px-4 py-2">{oc.nombre}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default ListadoOc
