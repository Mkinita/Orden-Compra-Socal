import { useState } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';

export default function LoginFail() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault();

    

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        setTimeout(() =>{
            router.push('/proveedores')
        },1000)
    } else {
        setTimeout(() =>{
            router.push('/loginfail')
        },1000)
    }
  };

  return (
    
    <form onSubmit={handleSubmit}
    className="space-y-5"
    >



        

        <div class="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:text-red-400 dark:border-red-800" role="alert">
            <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Info</span>
        <div>
            <span class="font-medium">Error!</span> Credenciales Incorrectas Intente Nuevamente.
        </div>

        </div>


    
      <label className='block text-sm uppercase text-gray-500 mb-2 font-extrabold'>
      EMAIL DE REGISTRO
        <input className='w-full px-3 py-2 border border-gray-300 text-black rounded-md placeholder-gray-400'
          type="email"
          placeholder='Tu Email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label  className='block text-sm uppercase text-gray-500 mb-2 font-extrabold'>
        Password
        <input  className='w-full px-3 py-2 border border-gray-300 text-black rounded-md placeholder-gray-400'
          type="password"
          placeholder='Tu Password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button className='w-full bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-3 cursor-pointer' type="submit">Iniciar Sesión</button>
    </form>
  );
}
