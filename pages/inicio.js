import LayouytInicio from '../layout/LayouytInicio'
import Link from 'next/link'






export default function Solicitud() {

  

  return (
    <LayouytInicio pagina={`Inicio`}>
      <p className='text-2xl mx-5 my-3 font-bold text-center'>
        Genera Ordenes De Compra
      </p>
      <p className='p-5'></p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-4'>  




      <div className="border p-1 w-full h-full hover:scale-110">
      <div className='p-2 text-center'>
        
            <Link href="/combustible" className="w-full mt-5 p-3 text-9xl ">⛽</Link>
            
            <p className='p-5'></p>
            <h3 className='text-lg font-bold'>Orden De Compra Combustible</h3>
      </div>
      </div>


      <div className="border p-1 w-full h-full hover:scale-110">
      <div className='p-2 text-center'>
        
            <Link href="/proveedores" className="w-full mt-5 p-3 text-9xl ">📝</Link>
            
            <p className='p-5'></p>
            <h3 className='text-lg font-bold'>Orden De Compra</h3>
      </div>
      </div>
                
        
      </div>
    </LayouytInicio>
  )
}