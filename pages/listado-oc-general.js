import useSWR from 'swr'
import axios from 'axios'
import LayoutInicioAdminGeneral from "../layout/LayoutInicioAdminGeneral"
import ListadoOcGeneral from '../components/ListadoOcGeneral'
import TablaGeneral from '@/components/TablaGeneral'
import * as XLSX from 'xlsx';
import {useState, useEffect} from 'react'
import {formatearDinero} from "helpers/index"






export default function Admin() {

    const fetcher = () => axios('/api/listado-ordenes-generales').then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/listado-ordenes-generales',fetcher,{refreshInterval: 100} )



    const exportTo = (orden) => {
        const ws = XLSX.utils.json_to_sheet(orden)
        const wb = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
        XLSX.writeFile(wb, 'table-data.xlsx')
    }

    const [ datos, setDatos ] = useState([])
    const [ buscar, setBuscar ] = useState('')
  
    //función para traer los datos de la API
    const URL = '/api/listado-ordenes-generales'
  
    const showData = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      //console.log(data)
      setDatos(data)
    }   
     //función de búsqueda
    const buscador = (e) => {
        setBuscar(e.target.value)   
    }
    
     const results = !buscar ? datos : datos.filter((dato)=> dato.obra.toLowerCase().includes(buscar.toLocaleLowerCase()))


    
      


     
    
     useEffect( ()=> {
      showData()
    }, [])



    console.log(datos)




    const [totalVolumen, setTotalVolumen] = useState(0);

    
    
  

    const totalgeneral = () => {
      let suma = 0;
      let totaldubiva = 0;
    
      results.forEach((ocpedidos) => {
        const cantidad = ocpedidos.cantidad || 0;
        const valor = ocpedidos.valor || 0;
        const total = cantidad * valor;
        const resultado = total === 0 ? 0 : total;
    
        const cantidad01 = ocpedidos.cantidad01 || 0;
        const valor01 = ocpedidos.valor01 || 0;
        const total01 = cantidad01 * valor01;
        const resultado01 = total01 === 0 ? 0 : total01;
    
        const cantidad02 = ocpedidos.cantidad02 || 0;
        const valor02 = ocpedidos.valor02 || 0;
        const total02 = cantidad02 * valor02;
        const resultado02 = total02 === 0 ? 0 : total02;
    
        const cantidad03 = ocpedidos.cantidad03 || 0;
        const valor03 = ocpedidos.valor03 || 0;
        const total03 = cantidad03 * valor03;
        const resultado03 = total03 === 0 ? 0 : total03;
    
        const cantidad04 = ocpedidos.cantidad04 || 0;
        const valor04 = ocpedidos.valor04 || 0;
        const total04 = cantidad04 * valor04;
        const resultado04 = total04 === 0 ? 0 : total04;
    
        const cantidad05 = ocpedidos.cantidad05 || 0;
        const valor05 = ocpedidos.valor05 || 0;
        const total05 = cantidad05 * valor05;
        const resultado05 = total05 === 0 ? 0 : total05;
    
        const cantidad06 = ocpedidos.cantidad06 || 0;
        const valor06 = ocpedidos.valor06 || 0;
        const total06 = cantidad06 * valor06;
        const resultado06 = total06 === 0 ? 0 : total06;
    
        const cantidad07 = ocpedidos.cantidad07 || 0;
        const valor07 = ocpedidos.valor07 || 0;
        const total07 = cantidad07 * valor07;
        const resultado07 = total07 === 0 ? 0 : total07;
    
        const cantidad08 = ocpedidos.cantidad08 || 0;
        const valor08 = ocpedidos.valor08 || 0;
        const total08 = cantidad08 * valor08;
        const resultado08 = total08 === 0 ? 0 : total08;
    
        const cantidad09 = ocpedidos.cantidad09 || 0;
        const valor09 = ocpedidos.valor09 || 0;
        const total09 = cantidad09 * valor09;
        const resultado09 = total09 === 0 ? 0 : total09;
    
        suma += resultado + resultado01 + resultado02 + resultado03 + resultado04 + resultado05 + resultado06 + resultado07 + resultado08 + resultado09;
      });
    
      const iva = suma * 0.19;
      totaldubiva = suma + iva;
      setTotalVolumen(totaldubiva);
    };
    


    


    function calcularVolumen() {
        totalgeneral();
      }


    
      

    
    
      
      
      
    
     

    return(
        <LayoutInicioAdminGeneral pagina={'Listado-OC'}>

            <h1 className="text-2xl font-black text-center"> Filtra Ordenes De Compra Por Obra</h1>
            <p className="text-2xl my-10"></p>
            <div className='mt-auto'>
                <input value={buscar} onChange={buscador} type="text" placeholder='Filtra Por Obra' className='text-gray-700 my-5 text-center m-auto flex-wrap-reverse border-yellow-400'/> 🔍
            </div>
            <TablaGeneral/>
            {data && data.length ? results.map(ocpedidos =>
                
                <ListadoOcGeneral
                    key={ocpedidos.id}
                    ocpedidos={ocpedidos}
                />

                ):
                <p>No Hay Ordenes Pendientes</p>
            }

            <div className='flex justify-center items-center gap-2'>
              <button className="my-4 py-2 px-4 text-black border hover:scale-110" onClick={calcularVolumen}>Calcular Total</button>
              <p className="border my-4 py-2 px-4">{formatearDinero(totalVolumen)}</p>
              
            </div>

            <div  className="text-center m-2">
                <button onClick={() => exportTo(results)}>📥 Exportar a Excel</button>
            </div>


            

        </LayoutInicioAdminGeneral>

        
    )

    
}


