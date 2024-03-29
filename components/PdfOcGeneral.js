import Image from "next/image"
import axios  from 'axios'
import { toast } from "react-toastify"
import {formatiarFecha} from "helpers/fecha"
import {formatearDinero} from "helpers/index"
import { useRouter } from 'next/router'
import {formatoNumero} from "helpers/formato"




const OrdenCompraAutorizada = ({ocpedidos}) => {
    const {id, nombre, total,cotizacion, pedido, fechasolicitud, folio, descripcion, senores,direccion,rut,fono,comuna,orden,cantidad,valor,
    
      valor01,cantidad01,descripcion01,
      valor02,cantidad02,descripcion02,
      valor03,cantidad03,descripcion03,
      valor04,cantidad04,descripcion04,
      valor05,cantidad05,descripcion05,
      valor06,cantidad06,descripcion06,
      valor07,cantidad07,descripcion07,
      valor08,cantidad08,descripcion08,
      valor09,cantidad09,descripcion09,
      nombre01,rut01
    
    }  
    = ocpedidos



    const formatoNumero = (num) => {
      return num.toString().slice(-4);
    }

    const router = useRouter()

    const completarOc = async () => {

      try {

         await axios.post(`/api/ocgeneraladmin/${id}`)
          toast.success('🏠')
          setTimeout(() =>{
            router.push('/autorizarordengeneraladminprueba')
        },1000)
      } catch (error) {
          toast.error('Hubo un error')
      }
  }

  

  

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

        

    
      <div role="status" className="space-y-8 md:space-y-0 md:space-x-8 md:items-center p-2 m-5">
            <div className="flex">
              <div className="flex items-center justify-center w-full h-48">
              <Image width={300} height={100} src="/assets/img/socal.png" alt="logo" className=""/>
              </div>
              <div className="w-full m-auto">
              <div className="text-center"><h3 className="text-lg font-bold inline-block align-baseline ">ORDEN DE COMPRA</h3></div>
              <div className="text-center"><h3 className="text-lg font-bold inline-block align-middle">Nº: {formatoNumero(id)}</h3></div>
              </div> 
            </div>
      </div>


        <div><p className="text-sm font-bold text-right">Fecha: {fechasolicitud}</p></div>



        {orden.map(oc => (
                <div key={oc.id}
                className=""
                >

            <div className=" border border-slate-800 rounded-xl p-2">
                <div className="flex ">
                    <div className="flex-1">
                    <p className="">SEÑOR (ES): {oc.nombre}{nombre01}</p>
                </div>

  

                <div className="flex-1">
                <p className="">RUT: {oc.rut}{rut01}</p>
                </div>
            </div>


            {/* <div className="flex ">
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
            </div> */}



            <div className="flex ">
                <div className="flex-1">
                  <p className="">Segun Cotizacion N°: {cotizacion}</p>
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
            {orden.map(oc => (
                <div key={oc.id}
                className=""
                >


                        <div role="status" className="space-y-2.5">
    
              <div className="flex items-center w-full space-x-2 text-center">
                  <div className="h-2.0  w-full">CANTIDAD</div>
                  <div className="h-5.0  w-full">DETALLE</div>
                  <div className="h-2.0 w-full">VALOR</div>
                  <div className="h-2.0 w-full">TOTAL</div>
              </div>

              <div className="flex items-center w-full space-x-2 text-center">
                  <div className="h-2.0  w-full">{cantidad}</div>
                  <div className="h-5.0  w-full">{descripcion}</div>
                  <div className="h-2.0  w-full">{formatearDinero (valor)}</div>
                  <div className="h-2.0  w-full">{formatearDinero (resultado)}</div>
              </div>

              <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full">{cantidad01}</div>
                  <div className="h-5.0  w-full">{descripcion01}</div>
                  <div className="h-2.0  w-full">{formatearDinero(valor01)}</div>
                  <div className="h-2.0  w-full">{formatearDinero(resultado01)}</div>
              </div>


              <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full">{cantidad02}</div>
                  <div className="h-5.0  w-full">{descripcion02}</div>
                  <div className="h-2.0  w-full">{formatearDinero (valor02)}</div>
                  <div className="h-2.0  w-full">{formatearDinero (resultado02)}</div>
              </div>

              <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full">{cantidad03}</div>
                  <div className="h-5.0  w-full">{descripcion03}</div>
                  <div className="h-2.0  w-full">{formatearDinero (valor03)}</div>
                  <div className="h-2.0  w-full">{formatearDinero (resultado03)}</div>
              </div>

              <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full">{cantidad04}</div>
                  <div className="h-5.0  w-full">{descripcion04}</div>
                  <div className="h-2.0  w-full">{formatearDinero(valor04)}</div>
                  <div className="h-2.0  w-full">{formatearDinero (resultado04)}</div>
              </div>


              <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full">{cantidad05}</div>
                  <div className="h-5.0  w-full">{descripcion05}</div>
                  <div className="h-2.0  w-full">{formatearDinero(valor05)}</div>
                  <div className="h-2.0  w-full">{formatearDinero (resultado05)}</div>
              </div>



              <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full">{cantidad06}</div>
                  <div className="h-5.0  w-full">{descripcion06}</div>
                  <div className="h-2.0  w-full">{formatearDinero(valor06)}</div>
                  <div className="h-2.0  w-full">{formatearDinero (resultado06)}</div>
              </div>


              <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full">{cantidad07}</div>
                  <div className="h-5.0  w-full">{descripcion07}</div>
                  <div className="h-2.0  w-full">{formatearDinero(valor07)}</div>
                  <div className="h-2.0  w-full">{formatearDinero (resultado07)}</div>
              </div>


              <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full">{cantidad08}</div>
                  <div className="h-5.0  w-full">{descripcion08}</div>
                  <div className="h-2.0  w-full">{formatearDinero(valor08)}</div>
                  <div className="h-2.0  w-full">{formatearDinero (resultado08)}</div>
              </div>



              <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full">{cantidad09}</div>
                  <div className="h-5.0  w-full">{descripcion09}</div>
                  <div className="h-2.0  w-full">{formatearDinero(valor09)}</div>
                  <div className="h-2.0  w-full">{formatearDinero (resultado09)}</div>
              </div>




        




              

              
          </div>


          

          
                        
                    </div>
            ))}
        </div>


        
        <div className="md:flex md:items-center md:justify-between my-5">


                
              </div>
          </div>


          <div className="p-2 space-y-2 m-2">


              
          <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full"></div>
                  <div className="h-5.0  w-full"></div>
                  <div className="h-2.0  w-full text-black font-bold">SUBTOTAL</div>
                  <div className="h-2.0  w-full">{formatearDinero(subtotal)}</div>
              </div>


              <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full"></div>
                  <div className="h-5.0  w-full"></div>
                  <div className="h-2.0  w-full text-black font-bold">IVA 19%</div>
                  <div className="h-2.0  w-full">{formatearDinero(iva)}</div>
              </div>



              <div className="flex items-center w-full space-x-2 text-center">
              <div className="h-1.5  w-full"></div>
                  <div className="h-5.0  w-full"></div>
                  <div className="h-2.0  w-full text-black font-bold">TOTAL</div>
                  <div className="h-2.0  w-full">{formatearDinero(totaldubiva)}</div>
              </div>

              
              </div>

          

          <div className="text-xs pb-5">

          

          
      
  </div>
  <div className="text-xs grid grid-cols-2 text-left">

  <div class="p-4">
  <p className="font-bold text-center">Importante</p>
          <p>-El Proveedor debe enviar el documento electrónico al SII y DT de la empresa.</p>
          <p>-El proveedor debe enviar copia del documento electrónico al correo albornoz.santiago@gmail.com</p>
          <p>-Áridos Socal, NO se responsabilizará por productos extras que sean entregados y no estén incluidas en la orden de compra.</p>
  </div>

  <div class="p-4">
  <div class="m-auto">
  <Image width={200} height={50} src="/assets/img/imaofi.png" alt="logo" className="m-auto"/>
            <p className="text-center text-sm">Firma Solicitante</p>
  </div>
  </div>
          
    </div>

    </>
  )
}

export default OrdenCompraAutorizada