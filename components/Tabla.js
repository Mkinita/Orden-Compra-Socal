const Tabla = ({orden}) => {
    
  return (
    
    <>
    
    <table className="table-auto w-full text-center bg-white text-gray-700">
            <thead>
                <tr>
                    <th className="px-4 py-2 hidden md:table-cell w-1/12">N°</th>
                    <th className="px-4 py-2 hidden md:table-cell w-1/12">Fecha </th>
                    <th className="px-4 py-2 hidden md:table-cell w-1/6">Emisor</th>
                    <th className="px-4 py-2 hidden md:table-cell w-1/6">Solicitante</th>
                    <th className="px-4 py-2 hidden md:table-cell w-1/6">Obra</th>
                    <th className="px-4 py-2 hidden md:table-cell w-1/6">Patente</th>
                    <th className="px-4 py-2 hidden md:table-cell w-1/6">Proveedor</th>
                </tr>
            </thead>
        </table>

    </>
  )
}

export default Tabla

