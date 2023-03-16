import Head from "next/head";
import SidebarAgregarDetalle from "../components/SidebarAgregarDetalle";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LayoutAgregar({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Socal - {pagina}</title>
        <meta name="description" content="RestoApp" />
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

                <SidebarAgregarDetalle/>
            </aside>

            

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />

      
    </>
  );
}


