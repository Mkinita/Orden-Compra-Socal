import Head from "next/head"
import SidebarCombustible from "../components/SidebarCombustible"
import Pasos from "../components/Pasos"
import Modal from "react-modal"
import { ToastContainer } from'react-toastify'
import ModalEquipo from "../components/ModalEquipo";
import ModalObra from "../components/ModalObra";
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

export default function LayoutPedido01({children, pagina}) {

    const {modal} = useCombustible()
    return (
      <>
      <Head>
            <title>Inicio - {pagina}</title>
            <meta name="description" content="Inicio"/>
            
            
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
            <SidebarCombustible/>
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
            <div className="p-10">
              {/* <Pasos/> */}
              {children}
            </div>
            
        </main>
      </div>

      {/* {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalEquipo />
        </Modal>
      )} */}


      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalObra />
        </Modal>
      )}


      
      <ToastContainer/>
      </>
    )
  }