import Head from "next/head";
import ImpresionSidebar from "../components/ImpresionSidebar";
import Sidebar from "../components/Sidebar"
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LayoutImprecion({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Socal - {pagina}</title>
        <meta name="description" content="RestoApp" />
      </Head>

      <div>
            <aside className="mx-1">

                <Sidebar/>
            </aside>

            

            <main>
                <div className="mx-1">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />

      
    </>
  );
}