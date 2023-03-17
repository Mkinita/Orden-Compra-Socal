import axios  from 'axios'
import { toast } from "react-toastify"
import {formatearDinero} from "helpers/index"
import { useRouter } from 'next/router'
import {formatiarFecha} from "helpers/fecha"



const OrdenGeneral = ({ocpedidos}) => {
    const {id, nombre, orden,  folio, emisor, obra,estado,fecha,
        valor,cantidad,descripcion,
        valor01,cantidad01,descripcion01,
        valor02,cantidad02,descripcion02,
        valor03,cantidad03,descripcion03,
        valor04,cantidad04,descripcion04,
    
    } = ocpedidos

    console.log(ocpedidos)


    const router = useRouter()

    const completarPago = async () => {

        try {

           await axios.post(`/api/admingeneral/${id}`)
            toast.success('Orden Autorizada 🔓')
            setTimeout(() =>{
              router.push('/orden-compra-general-autorizada')
          },1000)
        } catch (error) {
            toast.error('Hubo un error')
        }
    }


    const anularordendecompra = async () => {

      try {

         await axios.post(`/api/anularocgeneral/${id}`)
          toast.success('Orden Anulada 🔓')
      } catch (error) {
          toast.error('Hubo un error')
      }
  }

    
  return (
    <>
    <>
    
    <div className=''>
      <div className="border p-5 space-y-2 ">
        <div className=''></div>
        <div className=' border-b last-of-type:border-0 items-center'>
          <h3 className="text-xl font-bold">Nº O.C: {id}</h3>
          <p className="text-sm font-bold">Emisor: {emisor}</p>
          <p className="text-sm font-bold ">Obra: {obra}</p>
          <p className="text-sm font-bold ">Estado: {estado ? "Autorizado 🔓✔️" : "Pendiente 🔒⏱"}</p>
        </div>
      </div>
    </div>
  </>
    </>
  )
}

export default OrdenGeneral