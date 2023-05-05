import {formatiarFecha} from "helpers/fecha"
import Link from "next/link"
import {formatearDinero} from "helpers/index"


const ListadoOc = ({ocpedidos}) => {
    const {id, nombre, total, orden, fechasolicitud, folio,obra,emisor,
        valor,cantidad,descripcion,
        valor01,cantidad01,descripcion01,
        valor02,cantidad02,descripcion02,
        valor03,cantidad03,descripcion03,
        valor04,cantidad04,descripcion04,
        valor05,cantidad05,descripcion05,
        valor06,cantidad06,descripcion06,
        valor07,cantidad07,descripcion07,
        valor08,cantidad08,descripcion08,
        valor09,cantidad09,descripcion09
    
    } = ocpedidos



    const cantidad1 =cantidad;
  const valor1 = valor;
  const cantidadxvalor = (cantidad1) * (valor1)
  const resultado = cantidadxvalor === 0 ? '' : cantidadxvalor;

  const cantidad0 = cantidad01;
  const valor0 = valor01;
  const cantidadxvalor01 = (cantidad0) * (valor0);
  const resultado01 = cantidadxvalor01 === 0 ? '' : cantidadxvalor01;
  

  
  
  const cantidad2 = cantidad02;
  const valor2 = valor02;
  const cantidadxvalor02 = (cantidad2) * (valor2);
  const resultado02 = cantidadxvalor02 === 0 ? '' : cantidadxvalor02;


  const cantidad3 = cantidad03;
  const valor3 =  valor03;
  const cantidadxvalor03 = (cantidad3) * (valor3);
  const resultado03 = cantidadxvalor03 === 0 ? '' : cantidadxvalor03;


  const cantidad4 = cantidad04;
  const valor4 = valor04;
  const cantidadxvalor04 = (cantidad4) * (valor4);
  const resultado04 = cantidadxvalor04 === 0 ? '' : cantidadxvalor04;

  const cantidad5 = cantidad05;
  const valor5 = valor05;
  const cantidadxvalor05 = (cantidad5) * (valor5);
  const resultado05 = cantidadxvalor05 === 0 ? '' : cantidadxvalor05;



  const cantidad6 = cantidad06;
  const valor6 = valor06;
  const cantidadxvalor06 = (cantidad6) * (valor6);
  const resultado06 = cantidadxvalor06 === 0 ? '' : cantidadxvalor06;



  const cantidad7 = cantidad07;
  const valor7 = valor07;
  const cantidadxvalor07 = (cantidad7) * (valor7);
  const resultado07 = cantidadxvalor07 === 0 ? '' : cantidadxvalor07;


  const cantidad8 = cantidad08;
  const valor8 = valor08;
  const cantidadxvalor08 = (cantidad8) * (valor8);
  const resultado08 = cantidadxvalor08 === 0 ? '' : cantidadxvalor08;

  const cantidad9 = cantidad09;
  const valor9 = valor09;
  const cantidadxvalor09 = (cantidad9) * (valor9);
  const resultado09 = cantidadxvalor09 === 0 ? '' : cantidadxvalor09;



  const subtotal = cantidadxvalor + cantidadxvalor01 + cantidadxvalor02 + cantidadxvalor03 + cantidadxvalor04 + cantidadxvalor05 + cantidadxvalor06 + cantidadxvalor07 + cantidadxvalor08 + cantidadxvalor09
  const iva = subtotal * 0.19 
  const totaldubiva = subtotal + iva




    

  return (
    
    <>
    
        <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                {orden.map(oc => (
                    <tr key={oc.id}>
                        
                        <td className="border px-4 py-2 w-1/12">{id}</td>
                        <td className="border px-4 py-2 w-1/12">{fechasolicitud}</td>
                        <td className="border px-4 py-2 w-1/6">{nombre}</td>
                        <td className="border px-4 py-2 w-1/6">{obra}</td>
                        <td className="border px-4 py-2 w-1/6">{oc.nombre}</td>
                        <td className="border px-4 py-2 w-1/6">{formatearDinero (totaldubiva)}</td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default ListadoOc
