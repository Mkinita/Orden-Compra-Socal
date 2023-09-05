import Head from "next/head";
import SidebarAdminGeneral from "../components/SidebarAdminGeneral";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal"
import ModalOrdenGeneral  from "../components/ModalOrdenGeneral";

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
  
  return (
    <>
      <Head>
        <title>Socal - {pagina}</title>
        <meta name="description" content="socal" />
      </Head>

      <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                <Image
                    className="m-auto"
                    width={300}
                    height={100}
                    src="/assets/img/socal.png"
                    alt="imagen logotipo"
                />      

                <SidebarAdminGeneral/>
            </aside>

            

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
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