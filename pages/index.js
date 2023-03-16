import { Inter } from '@next/font/google'
import Layout from '../layout/Layout'
import Equipo from '../components/Equipo'
import useCombustible from '../hooks/useCombustible'
import {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Login from '@/components/Login'
import Head from "next/head"



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  

  return (
    <>
    <Head>
        <meta name="description" content="Descripción de mi sitio web" />
        <link rel="icon" href="/socal.png" />
        <title>Ordenes De Compras Socal</title>
        <meta property="og:image" content="/socal.png" />
        <meta name="twitter:image" content="/socal.png" />
      </Head>
    <div className='nx-auto container my-10 px-2'>
    <div className='mt-4 mx-auto max-w-md'>
    <div className='bg-white py-4 px-4 shadow'>
    <Image width={280} height={100} src="/assets/img/socal.png" alt="logo" className="m-auto pb-12"/>
   <Login/>

   </div>
   </div>
   </div>

    </>
  )
}




  
  
  
  

