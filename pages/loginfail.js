import { Inter } from '@next/font/google'
import Image from 'next/image'
import LoginFail from '@/components/LoginFail'



const inter = Inter({ subsets: ['latin'] })

export default function Fail() {

  

  return (
    <>
    <div className='nx-auto container my-10 px-2'>
    <div className='mt-4 mx-auto max-w-md'>
    <div className='bg-white py-4 px-4 shadow'>
    <Image width={280} height={100} src="/assets/img/socal.png" alt="logo" className="m-auto pb-12"/>
   <LoginFail/>

   </div>
   </div>
   </div>

    </>
  )
}
