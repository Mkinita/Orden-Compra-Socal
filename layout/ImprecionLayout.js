import Head from "next/head";
import Sidebarimprecion from "../components/Sidebarimprecion";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Socal - {pagina}</title>
        <meta name="description" content="RestoApp" />
      </Head>

      <div>
            <aside className="mx-1">

                <Sidebarimprecion/>
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