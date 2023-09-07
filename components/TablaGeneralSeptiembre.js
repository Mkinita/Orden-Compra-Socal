const TablaGeneral = ({orden}) => {
    
    return (
      
      <>
      

        <div class="">
                    <table class="table-auto w-full">
                        <thead>
                            <tr>
                                <th class="px-4 py-2 text-left">
                                    <h2 class="text-ml font-bold text-gray-600">Listado</h2>
                                </th>
                            </tr>

                            </thead>

                            <tbody>
                            <tr class="border-b w-full">
                                <td class="px-4 py-2  align-top w-1/5 text-center">
                                    <div>
                                        <p>Nº</p>
                                    </div>
                                </td>
                                <td class="px-4 py-2  align-top w-1/5 text-center">
                                    <div>
                                        <p>Fecha</p>
                                    </div>
                                </td>
                                <td class="px-4 py-2  align-top w-1/5 text-center">
                                    <div>
                                        <p>Solicitante</p>
                                    </div>
                                </td>
                                <td class="px-4 py-2  align-top w-1/5 text-center">
                                    <div>
                                        <p>Detalle</p>
                                    </div>
                                </td>
                                <td class="px-4 py-2 text-left text-cyan-500 w-1/5 ">
                                    <p>Total</p>
                                </td>
                            </tr>
                            
                            
                        </tbody>
                        
                        
                    </table>
                </div>


  
      </>
    )
  }
  
  export default TablaGeneral
  