import LayouytInicio from '../layout/LayouytInicio'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';






export default function Solicitud() {

  const [email, setEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Obtén el correo electrónico almacenado en la cookie
    const userEmail = Cookies.get('userEmail');

    // Si el correo electrónico no está presente, redirige al usuario de vuelta a la página de inicio de sesión
    if (!userEmail) {
      router.push('/login');
    } else {
      setEmail(userEmail);
    }
  }, []);

  

  return (
    <LayouytInicio pagina={`Inicio`}>
      
        
      
{/* <p className='text-2xl mx-5 my-3 font-bold text-center'>
      Genera Ordenes De Compra
      </p>
      <p className='p-5'></p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-1 2xl:grid-cols-4'> 
<div class="grid grid-cols-3">
        <div class="col-span-1">
          <div className="p-1 w-full h-full hover:scale-110">
            <div className='p-2 text-center'>
                  
                <Link href="/combustible" className="w-full mt-5 p-3 text-7xl ">⛽</Link>
                      
                <p className='p-5'></p>
                <h3 className='text-sm font-bold'>O.C. Combustible</h3>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div className="p-1 w-full h-full hover:scale-110">
            <div className='p-2 text-center'>
                  
                <Link href="/pedidoobra" className="w-full mt-5 p-3 text-7xl ">⛽</Link>
                      
                <p className='p-5'></p>
                <h3 className='text-sm font-bold'>O.C. Por Obra</h3>
            </div>
          </div>
        </div>
        <div className="p-1 w-full h-full hover:scale-110">
      <div className='p-2 text-center'>
        
            <Link href="/proveedores" className="w-full mt-5 p-3 text-7xl ">📝</Link>
            
            <p className='p-5'></p>
            <h3 className='text-sm font-bold'>Orden De Compra</h3>
      </div>
      </div>
      </div>


      <Image width={280} height={100} src="/assets/img/inicioadmin.gif" alt="logo" className="m-auto"/>

            


      


      
                
        
      </div> */}

<div>
      {email && <p>Hola {email}!</p>}
      {/* Resto de tu contenido de la página de inicio */}
    </div>
    </LayouytInicio>
  )
}