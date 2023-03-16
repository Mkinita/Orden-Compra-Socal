import AdminLayout from "../layout/AdminLayout"
import useCombustible from "../hooks/useCombustible"
import ResumenSolicitud from "../components/ResumenSolicitud"
import ResumenSolicitud01 from "../components/ResumenSolicitud01"
import Link from "next/link"

export default function Resumen() {

    const { pedido, pedido01 } = useCombustible()

   return (
        <AdminLayout pagina='Resumen'>
            <h1 className="text-2xl font-black">Resumen Solicitud</h1>
            <p className="text-lg my-8">Revisa Tu Solicitud</p>


            {pedido01.length === 0 ? (
                <p className="text-center text-2xl"></p>
            ) : (
                pedido01.map((proveedor) => (
                <ResumenSolicitud01 key={proveedor.id} proveedor={proveedor} />
                ))
            )}


            {pedido.length === 0 ? (
                <p className="text-center text-2xl">No hay Solicitudes</p>
            ) : (
                pedido.map((equipo) => (
                <ResumenSolicitud key={equipo.id} equipo={equipo} />
                ))
            )}

           


            <div className="text-center font-extrabold p-5">
                <Link href="/solicitud" className="border border-r-slate-200 p-2">
                    ⏩
                        <span className="ml-3 ">Siguiente ⏩</span>
                </Link>
            </div>
            
        </AdminLayout>
   )
}