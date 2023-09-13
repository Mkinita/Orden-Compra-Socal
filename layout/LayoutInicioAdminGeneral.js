import Head from "next/head";
import SidebarAdminGeneral from "../components/SidebarAdminGeneral";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal"
import ModalOrdenGeneral  from "../components/ModalOrdenGeneral";
import React, { useState } from 'react';
import Link from "next/link";
import useCombustible from "../hooks/useCombustible";
import 'react-toastify/dist/ReactToastify.css'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '800px',
    height: '400px',
    maxWidth: '100%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#__next');

export default function AdminLayout({ children, pagina }) {


  const {modal} = useCombustible()
  const [sidebarOpen, setSidebarOpen] = useState(true);

  
  return (
    <>
      <Head>
        <title>Socal - {pagina}</title>
        <meta name="description" content="socal" />
      </Head>

      <div className="md:flex">
        <aside
          className={`bg-gray-50 ${
            sidebarOpen
              ? 'md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5'
              : 'md:w-1/12 xl:w-1/12 2xl:w-1/12 py-5'
          }`}
        >
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center "
          >
            <Image
              className={`hover:translate-x-2 transition-transform ${sidebarOpen ? '' : 'w-10 h-10'}`}
              width={150}
              height={50}
              src="/assets/img/socal.png"
              alt="imagen logotipo"
            />
          </button>
          <div className={` ${sidebarOpen ? '' : 'w-54'}`}>
            {/* <SidebarAdminGeneral /> */}
            <div className="px-3 py-4 overflow-y-auto rounded">
        <ul className="space-y-2">

        <li className="group relative">
          <Link href="/tablero-admin" className="w-full flex items-center justify-center p-2 text-sm uppercase shadow rounded-lg md:rounded-3xl hover:translate-x-2 transition-transform">
            🏠
            <span className={`ml-3 ${sidebarOpen ? '' : 'hidden'}`}>Inicio</span>
          </Link>
        </li>
            
               <li className="group relative">
                  <Link href="https://socal-production.up.railway.app/auth/login" className="w-full flex items-center justify-center p-2 text-sm uppercase shadow rounded-lg md:rounded-3xl hover:translate-x-2 transition-transform">
                     ⚠️
                  <  span className={`ml-3 ${sidebarOpen ? '' : ' hidden'}`}>Cerrar Sesion</span>
                  </Link>
               </li>
           
        </ul>
        </div>
          </div>
        </aside>

            

            

            

            <main className="md:w-8/12 xl:w-full 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-5">
                    {children}
                </div>
            </main>
            
      </div>


      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalOrdenGeneral />
        </Modal>
      )}

      
      <ToastContainer />

      
    </>
  );
}