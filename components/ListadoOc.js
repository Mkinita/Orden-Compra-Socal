import {formatiarFecha} from "helpers/fecha"


const ListadoOc = ({orden}) => {
    const {id, nombre, total, pedido,pedido01, fecha, folio, descripcion, emisor, obra} = orden



    const formatoNumero = (num) => {
        return num.toString().slice(-4);
      }
    //   const formattedNumber = folio;


    

    
  return (
    
    <>
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                {pedido.map(oc => (
                    <tr key={oc.id}>
                        <td className="border px-4 py-2 w-1/12">{formatoNumero(id)}</td>
                        <td className="border px-4 py-2 w-1/12">{formatiarFecha(fecha)}</td>
                        <td className="border px-4 py-2 w-1/6">{emisor}</td>
                        <td className="border px-4 py-2 w-1/6">{nombre}</td>
                        <td className="border px-4 py-2 w-1/6">{obra}</td>
                        <td className="border px-4 py-2 w-1/6">{oc.patente}</td>
                        {pedido01.map(oc => (
                    <tr key={oc.id}>
                        <td className="border px-4 py-2 w-1/6">{oc.nombre}</td>
                    </tr>
                ))}
                    </tr>
                ))}
                
            </tbody>
            
        </table>
    </>
  )
}

export default ListadoOc

