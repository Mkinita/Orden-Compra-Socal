import {formatiarFecha} from "helpers/fecha"
import Link from "next/link"
import {formatearDinero} from "helpers/index"
import axios  from 'axios'
import { toast } from "react-toastify"
import { useRouter } from 'next/router'


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


  const router = useRouter()

    

    const anularordendecompra = async () => {

        try {
  
           await axios.post(`/api/anularocpedidos/${id}`)
            toast.success('Orden Anulada 🔓')
            setTimeout(() =>{
                router.push('/listado-oc-general-admin')
            },1000)
        } catch (error) {
            toast.error('Hubo un error')
        }
    }




    

  return (
    
    <>
    
        {/* <table className="table-auto w-full text-center bg-white text-gray-700">
            <tbody>
                {orden.map(oc => (
                    <tr key={oc.id}>
                        
                        <td className="border px-4 py-1 w-1/12">{id}</td>
                        <td className="border px-4 py-1 w-1/6">{fechasolicitud}</td>
                        <td className="border px-4 py-1 w-1/6">{nombre}</td>
                        <td className="border px-4 py-1 w-1/6">{obra}</td>
                        <td className="border px-4 py-1 w-1/6">{formatearDinero (totaldubiva)}</td>
                        <td className="border px-4 py-1 w-1/12"><Link href={`/ordenes/${id}`} className=" flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-file-pdf" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" id="mainIconPathAttribute" fill="#ff0000"></path> <path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" id="mainIconPathAttribute" fill="#ff0000"></path> </svg>
                            </Link>
                        </td>
                        <td className="border px-4 py-1 w-1/12">
                            <button className="flex-1  py-3 px-2 hover:animate-pulse" type="button" onClick={anularordendecompra}>
                                🚫
                            </button>
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table> */}

        <div class="">
            <table class="table-auto w-full">
                
                <tbody>
                    <tr class="border-b w-full">
                        <td class="px-4 py-2  align-top w-1/5 text-center">
                            <div>
                                <p>{id}</p>
                            </div>
                        </td>
                        <td class="px-4 py-2  align-top w-1/5 text-center">
                            <div>
                                <p>{fechasolicitud}</p>
                            </div>
                        </td>
                        <td class="px-4 py-2  align-top w-1/5 text-center">
                            <div>
                                <p>{nombre}</p>
                            </div>
                        </td>
                        <td class="px-4 py-2  align-top w-1/5 text-center">
                            <div>
                                <p><Link href={`/ordenes/${id}`} className=" flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-file-pdf" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" id="mainIconPathAttribute" fill="#ff0000"></path> <path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" id="mainIconPathAttribute" fill="#ff0000"></path> </svg>
                            </Link></p>
                            </div>
                        </td>
                        <td class="px-4 py-2 text-left text-cyan-500 w-1/5 ">
                            <p><span>{formatearDinero (totaldubiva)}</span></p>
                        </td>
                    </tr>
                    
                    
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ListadoOc
