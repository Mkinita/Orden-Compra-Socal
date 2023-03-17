import Image from "next/image"
import axios  from 'axios'
import { toast } from "react-toastify"
import {formatiarFecha} from "helpers/fecha"
import { useRouter } from 'next/router'




const OrdenAutorizadaAdmin = ({orden}) => {
    const {id, nombre, total, pedido, fecha, folio, descripcion, senores,direccion,rut,fono,comuna,pedido01,valor} = orden



    const formatoNumero = (num) => {
      return num.toString().slice(-4);
    }

    const router = useRouter()

    const completarOc = async () => {

      try {

         await axios.post(`/api/ocfinalizadaadmin/${id}`)
          toast.success('🏠')
          setTimeout(() =>{
            router.push('/autorizar')
        },1000)
      } catch (error) {
          toast.error('Hubo un error')
      }
  }


    

    
  return (

    <>


        

    
      <div role="status" className="space-y-8 md:space-y-0 md:space-x-8 md:items-center p-2 m-5">
            <div className="flex">
              <div className="flex items-center justify-center w-full h-48">
              <Image width={280} height={100} src="/assets/img/SOCALIPR.png" alt="logo" className=""/>
              {/* <Image width={280} height={100} src="/assets/img/socal.png" alt="logo" className=""/> */}
              </div>
              <div className="w-full m-auto">
              <div className="text-center"><h3 className="text-xl font-bold inline-block align-baseline ">ORDEN DE COMPRA</h3></div>
              <div className="text-center"><h3 className="text-xl font-bold inline-block align-middle">Nº: {formatoNumero(id)}</h3></div>
              </div> 
            </div>
      </div>


        <div><p className="text-sm font-bold text-right">Fecha: {formatiarFecha(fecha)}</p></div>

        {pedido01.map(oc => (
                <div key={oc.id}
                className=""
                >

            <div className=" border border-slate-800 rounded-xl p-2">
                <div className="flex ">
                    <div className="flex-1">
                    <p className="">SEÑOR (ES): {oc.nombre}</p>
                </div>

  

                <div className="flex-1">
                <p className="">RUT: {oc.rut}</p>
                </div>
            </div>


            <div className="flex ">
                <div className="flex-1">
                    <p className="">DIRECCION: {oc.direccion}</p>
                </div>

  

                <div className="flex-1">
                  <p className="">FONO: {oc.fono}</p>
                </div>
            </div>


            <div className="flex ">
              <div className="flex-1">
                <p className="">CIUDAD:</p>
              </div>

              

              <div className="flex-1">
                <p className="">COMUNA: {oc.comuna}</p>
              </div>
            </div>



            <div className="flex ">
                <div className="flex-1">
                  <p className="">Segun Cotizacion N°:</p>
              </div>


              

              

              <div className="flex-1">
                  <p className="">Solicitado por : {nombre}</p>
              </div>
                  </div>
            </div>
            </div>
                ))}



<p className="text-center m-2 text-sm">Agradecemos a Ud(s) despachar por cuenta de ARIDOS Y CONSTRUCCIONES SOCAL LIMITADA lo siguiente:</p>

     


    
    <div className="border p-2 space-y-2 border-slate-800 rounded-xl m-2">
          
    
        <div>
            {pedido.map(oc => (
                <div key={oc.id}
                className=""
                >


                        <div role="status" className="space-y-2.5">
    
              <div className="flex items-center w-full space-x-2 text-center">
                  <div className="h-2.0 w-full">Cantidad</div>
                  <div className="h-5.0  w-full">Codigo</div>
                  <div className="h-2.0  w-full">DETALLE</div>
                  <div className="h-2.0 w-full">Valor</div>
              </div>

              <div className="flex items-center w-full space-x-2 text-center">
                  <div className="h-2.0  w-full">{oc.cantidad}</div>
                  <div className="h-5.0  w-full">{oc.cantidad}</div>
                  <div className="h-2.0  w-full">{descripcion} {oc.nombre} {oc.patente}</div>
                  <div className="h-2.0  w-full">{oc.cantidad}</div>
              </div>

              <div className="flex items-center w-full space-x-2 text-center">
                  <div className="h-1.5  w-full"></div>
                  <div className="h-5.5  w-full"></div>
                  <div className="h-2.0  w-full"></div>
                  <div className="h-2.0  w-full"></div>
              </div>
          </div>
                        
                    </div>
            ))}
        </div>

        



       

          

          
      
  </div>
              <div className="py-28">
                <div className="text-xs grid grid-cols-2 text-left">

          <div class="p-4">
          <p className="font-bold text-center">Importante</p>
                  <p>-El Proveedor debe enviar el documento electrónico al SII y DT de la empresa.</p>
                  <p>-El proveedor debe enviar copia del documento electrónico al correo albornoz.santiago@gmail.com</p>
                  <p>-Áridos Socal, NO se responsabilizará por productos extras que sean entregados y no estén incluidas en la orden de compra.</p>
          </div>

          <div class="p-4">
          <div class="m-auto">
          <Image width={100} height={50} src="/assets/img/firma.png" alt="logo" className="m-auto"/>
                    <p className="text-center text-sm">Firma Solicitante</p>
          </div>
          </div>
                  
            </div>

            </div>


    

    
    <button
                className=" mt-2 md:mt-0 py-3 px-5 uppercase font-bold rounded-xl mx-28"
                type="button"
                onClick={completarOc}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>


                </button>

    </>
  )
}

export default OrdenAutorizadaAdmin