import Image from "next/image"
import axios  from 'axios'
import { toast } from "react-toastify"
import { useRouter } from 'next/router'



const Orden = ({orden}) => {
    const {id, nombre, total, emisor,pedido,pedido03,obra,descripcion,cantidad} = orden
    const router = useRouter()

    const completarPago = async () => {

        try {

           await axios.post(`/api/admin/${id}`)
            toast.success('Orden Autorizada 🔓')
            setTimeout(() =>{
                router.push('/orden-compra-admin')
            },1000)
        } catch (error) {
            toast.error('Hubo un error')
        }
    }

    const anularordendecompra = async () => {

        try {
  
           await axios.post(`/api/ocanular/${id}`)
            toast.success('Orden Anulada 🔓')
        } catch (error) {
            toast.error('Hubo un error')
        }
    }


    

    
  return (
    <>
    <div className="border p-10 space-y-2 ">
      <div className=''></div>
        <div className='py-3 border-b last-of-type:border-0 items-center'>
            <h3 className="text-xl font-bold">Nº O.C: {id}</h3>
            <p className="text-sm font-bold">Emisor: {emisor}</p>
            <p className="text-sm font-bold">Solicitante: {nombre}</p>
            <p className="text-sm font-bold ">Obra: {obra}</p>
            </div>

            {pedido03.map(oc => (
                <div key={oc.id}
                className="py-3 flex border-b last-of-type:border-0 items-center"
                >
                    
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Proveedor</h3>
                        <p className="text-xs font-bold">Nombre: {oc.nombre}</p>
                        <p className="text-xs font-bold">Cantidad: {oc.cantidad} Litros</p>
                    </div>


                    
                </div>

            ))}
        <div>
            



<div class="grid grid-cols-2">
        <div class="col-span-1">
          <div className="p-1 w-full h-full">
            <div className='p-2 text-center'>                      
                <p className='p-5'></p>
                <h3 className='text-sm font-bold'>
                {pedido.map(oc => (
                <div key={oc.id}
                className="py-3 flex border-b last-of-type:border-0 items-center"
                >
                    
                    

                    <div className="xl:w-48 md:w-14 space-y-2">
                    <h3 className="text-xl font-bold">Equipo</h3>
                        <Image
                            width={400}
                            height={500}
                            src={`/assets/img/${oc.imagen}`}
                            alt={`imagen oc${oc.nombre}`}
                            
                        />
                    </div> 
                </div>
            ))}
                </h3>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div className="p-1 w-full h-full">
            <div className='p-2 text-center'>                      
                <p className='p-5'></p>
                <h3 className='text-sm font-bold'>
                {pedido.map(oc => (
                <div key={oc.id}
                className="py-3 flex border-b last-of-type:border-0 items-center"
                >
                    
                    

                    <div className="xl:w-48 md:w-14 space-y-2">
                    {/* <h3 className="text-xl font-bold">Datos Del Equipo</h3>
                    
                    <p className="font-bold text-sm">Patente: {oc.patente}</p>
                    <p className="font-bold text-sm">Chofer: {oc.operador}</p>


                    <p className="py-10"></p> */}
                    <h3 className="text-xl font-bold">Solicitud</h3>
                    
                    <p className="font-bold text-sm">Carga: {cantidad} {descripcion}</p>
                    </div>
                    
                     
                </div>
            ))}
                </h3>
            </div>
          </div>
        </div>
        </div>
        </div>


        




        <div className="md:flex md:items-center md:justify-between my-10">
                {/* <p className="mt-5 font-black text-4xl text-amber-500">Total a Pagar: {formatearDinero(total)}</p> */}
                
                <button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold"
                type="button"
                onClick={completarPago}
                >
                Autorizar

                </button>  
        </div>


        <div className="md:flex md:items-center md:justify-between my-10">
                {/* <p className="mt-5 font-black text-4xl text-amber-500">Total a Pagar: {formatearDinero(total)}</p> */}
                
                <button
                className="w-full bg-red-600 hover:bg-red-700 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold"
                type="button"
                onClick={anularordendecompra}
                >
                Anular

                </button>  
        </div>
        <di className="p-5"></di>

    </div>

    </>
    
  )
}

export default Orden