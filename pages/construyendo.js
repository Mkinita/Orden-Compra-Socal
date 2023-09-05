import { Inter } from '@next/font/google'
import  LayoutInicioAdminGeneral from '../layout/LayoutInicioAdminGeneral'
import Image from 'next/image'



const inter = Inter({ subsets: ['latin'] })

export default function Solicitud() {

  

  return (
    <   LayoutInicioAdminGeneral pagina={`Construyendo`}>
    

        <div className="">
            <h2 className="text-gray-500 text-lg font-semibold pb-2 text-center">Sitio En Construcción</h2>
            <Image
                src="/assets/img/Website Creator.gif" alt="imagen"
                width={400}
                height={400}
                className="m-auto text-center"
            />
        </div>
      
    </  LayoutInicioAdminGeneral>
  )
}