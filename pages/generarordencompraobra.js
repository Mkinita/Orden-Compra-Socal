import LayoutCombustible from "../layout/LayoutCombustible"
import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
import ResumenSolicitudObra from "../components/ResumenSolicitudObra"





export default function GenerarOrdenDeCompraObra() {
    const { pedido,pedido03, nombre,setObra,cantidad, obra,descripcion, setNombre, setDescripcion, setCantidad, agregarOCObra ,
    emisor,setEmisor,pedido01

    
    } = useCombustible()


    
            
    const [isHidden, setIsHidden] = useState(true);
              
    const toggleHidden = () => {setIsHidden(!isHidden);}


    const comprobarOrdenDeCompra = useCallback(() => {
        return pedido.length === 0 || nombre === "" || nombre.length <2;
        
    },[pedido, nombre])


    useEffect(() => {
        comprobarOrdenDeCompra()
    },[pedido, comprobarOrdenDeCompra])



    

    function handleGenerateFolio() {
        setFolio(uuidv4());
    }


    const [optionsonbras, setOptionsobras] = useState([]);
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('/api/detalle');
        const data = await response.json();
        setOptions(data);
        };
        fetchData();
    }, []);



    useEffect(() => {
        const fetchFaena = async () => {
        const response = await fetch('/api/faenas');
        const data = await response.json();
        setOptionsobras(data);
        };
        fetchFaena();
    }, []);





    const handleChangeObras = (event) => {
        setObra(event.target.value);
    };

    const handleChange = (event) => {
        setDescripcion(event.target.value);
    };








  const router = useRouter();

  function handleReloadClick() {
    router.reload();
  }




        


      
    
    return (
        <LayoutCombustible pagina='GenerarOrdenDeCompraObra O.C.'>
            <h1 className="text-2xl font-black ">Generar Orden De Compra</h1>
            <p className="text-2xl my-10"></p>        
      
      
    

            <form 
                onSubmit={agregarOCObra}
                className="text-center"
                
            >


                {pedido03.map(obras=>(
                        <ResumenSolicitudObra key={obras.id} obras={obras}/>
                        ))}




    

                


                <div className=" p-2">
                    <div className="grid grid-cols-3 gap-1" >

                        <div>
                            <label 
                                htmlFor="emisor"
                                className="block uppercase text-slate-800 font-bold text-sm">Emisor</label>
                            <input
                                id="emisor"
                                type="text"
                                className="bg-gray-200 w-full p-2 rounded-md"  
                                value={emisor}
                                onChange={e => setEmisor(e.target.value)}
                            />
                        
                        </div>
                        <div>
                            <label 
                                htmlFor="nombre"
                                className="block uppercase text-slate-800 font-bold text-sm">Solicitante</label>
                            <input
                                id="nombre"
                                type="text"
                                className="bg-gray-200 w-full p-2 rounded-md"  
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                            />
                        
                        </div>


                        {/* <div>
                        <label 
                            htmlFor="obra"
                            className=""></label>
                            <select value={selectedValueObras} onChange={handleChangeObras} className="block uppercase text-slate-800 font-bold text-sm text-center">
                                    <option value="">Obra</option>
                                    {optionsonbras.map((option) => (
                                        <option key={option.id} value={option.value}>
                                        {option.nombre}
                                        </option>
                                    ))}
                                </select>
                        <input
                            id="obra"
                            type="text"
                            className="bg-gray-200 w-full p-2 rounded-md"  
                            value={obra}
                            onChange={e => setObra(e.target.value)}
                        />
                    
                    </div> */}
                    </div>
                </div>


                

                    

                

                


                <div className="p-2"></div>
                

                <div className="flex gap-1 p-2" >
                    <div className="flex-1 w-16">

                        <label 
                            htmlFor="cantidad"
                            className="block uppercase text-slate-800 font-bold text-sm py-5">Cantidad</label>
                        <input
                            id="cantidad"
                            type="number"
                            className="bg-gray-200 w-full p-2 rounded-md"  
                            value={cantidad}
                            onChange={e => setCantidad(e.target.value)}
                        />
                    
                    </div>


                    <div className="flex-1 w-16">
                        <label 
                            htmlFor="descripcion"
                            className=""></label>
                            <select value={selectedValue} onChange={handleChange} className="block uppercase text-slate-800 font-bold text-sm py-5">
                                    <option value="">Detalle</option>
                                    {options.map((option) => (
                                        <option key={option.id} value={option.value}>
                                        {option.nombre}
                                        </option>
                                    ))}
                                </select>
                        <input
                            id="descripcion"
                            type="text"
                            className="bg-gray-200 w-full p-2 rounded-md"  
                            value={descripcion}
                            onChange={e => setDescripcion(e.target.value )}
                        />
                        
                    </div>


                    
                </div>

                

                
                

                <div className="mt-10">
                    <input
                        type="submit"
                        className= {`${comprobarOrdenDeCompra() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                        value="Generar O.C."
                        disabled={comprobarOrdenDeCompra()}
                        
                        
                    />
                </div>




                
                
            </form>


            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={toggleHidden}
                >
                ➕
            </button>



            
        </LayoutCombustible>
   )
}