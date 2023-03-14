import { useState } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';

export default function Login() {
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
            router.push('/inicio')
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
