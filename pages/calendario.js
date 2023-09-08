import { Inter } from '@next/font/google'
import  LayoutInicioAdminGeneral from '../layout/LayoutInicioAdminGeneral'
import Image from 'next/image'
import Calendario from '@/components/Calendario'



const inter = Inter({ subsets: ['latin'] })

export default function Solicitud() {

  

  return (
    <   LayoutInicioAdminGeneral pagina={`Construyendo`}>
    

        <div className='w-full md:w-3/4 m-auto'>
            <Calendario/>
        </div>
        
      
    </  LayoutInicioAdminGeneral>
  )
}