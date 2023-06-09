import Head from "next/head"
import SidebarInicioAdmin from "../components/SidebarInicioAdmin"
import Modal from "react-modal"
import { ToastContainer } from'react-toastify'
import useCombustible from "../hooks/useCombustible";

import 'react-toastify/dist/ReactToastify.css'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

export default function LayouytInicio({children, pagina}) {

    const {modal} = useCombustible()
    return (
      <>
      <Head>
            <title>Inicio - {pagina}</title>
            <meta name="description" content="Inicio"/>
            
            
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
            <SidebarInicioAdmin/>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
            <div className="p-10">
              {children}
            </div>
            
        </main>
      </div>
      
      <ToastContainer/>
      </>
    )
  }