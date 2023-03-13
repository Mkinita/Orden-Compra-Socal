const Tabla = ({orden}) => {
    
  return (
    
    <>
    
    <table className="table-auto w-full text-center bg-white text-gray-700">
            <thead>
                <tr>
                    <th className="px-2 py-2">N° OC </th>
                    <th className="px-2 py-2">Fecha </th>
                    <th className="px-16 py-2">Solicitante</th>
                    <th className="px-8 py-2">Detalle</th>
                    <th className="px-2 py-2">Patente</th>
                </tr>
            </thead>
        </table>

    </>
  )
}

export default Tabla

