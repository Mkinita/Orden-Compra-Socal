import LayoutInicioAdmin from '../layout/LayoutInicioAdmin'
import Link from 'next/link'






export default function Solicitud() {

  

  return (
    <LayoutInicioAdmin pagina={`Inicio`}>
      <p className='text-2xl mx-5 my-3 font-bold text-center'>
        Administra Tus Ordenes De Compra
      </p>
      <p className='p-5'></p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-4'>  




      

      <div class="grid grid-cols-2">
        <div class="col-span-1">
          <div className="p-1 w-full h-full hover:scale-110">
            <div className='p-2 text-center'>
                  
                <Link href="/autorizar" className="w-full mt-5 p-3 text-9xl ">⛽</Link>
                      
                <p className='p-5'></p>
                <h3 className='text-sm font-bold'>O.C. Combustible</h3>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div className="p-1 w-full h-full hover:scale-110">
            <div className='p-2 text-center'>
                  
                <Link href="/autorizar-obra" className="w-full mt-5 p-3 text-9xl ">⛽</Link>
                      
                <p className='p-5'></p>
                <h3 className='text-sm font-bold'>O.C. Por Obra</h3>
            </div>
          </div>
        </div>
      </div>


      <div className="p-1 w-full h-full hover:scale-110">
      <div className='p-2 text-center'>
        
            <Link href="/autorizarordengeneral" className="w-full mt-5 p-3 text-9xl ">📝</Link>
            
            <p className='p-5'></p>
            <h3 className='text-sm font-bold'>Orden De Compra</h3>
      </div>
      </div>
                
        
      </div>
    </LayoutInicioAdmin>
  )
}