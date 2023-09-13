import LayoutInicioAdminGeneral from "../layout/LayoutInicioAdminGeneral"
import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { useRouter } from 'next/router';
import ResumenSolicitusGeneralAdmin from "../components/ResumenSolicitusGeneralAdmin"





export default function GenerarOrdenDeCompra() {
    const { orden, folio, nombre, obra,setObra, cantidad, valor,setValor, descripcion, setFolio, setNombre, setDescripcion, setCantidad, agregarOCAdmin ,
    cantidad01, setCantidad01, descripcion01, setDescripcion01, valor01, setValor01,
    cantidad02, setCantidad02, descripcion02, setDescripcion02, valor02, setValor02,
    cantidad03, setCantidad03, descripcion03, setDescripcion03, valor03, setValor03,
    cantidad04, setCantidad04, descripcion04, setDescripcion04, valor04, setValor04,
    cantidad05, setCantidad05, descripcion05, setDescripcion05, valor05, setValor05,
    cantidad06, setCantidad06, descripcion06, setDescripcion06, valor06, setValor06,
    cantidad07, setCantidad07, descripcion07, setDescripcion07, valor07, setValor07,
    cantidad08, setCantidad08, descripcion08, setDescripcion08, valor08, setValor08,
    cantidad09, setCantidad09, descripcion09, setDescripcion09, valor09, setValor09,
    emisor,setEmisor,pedido01,fechasolicitud, setFechasolicitud,cotizacion,setCotizacion

    
    } = useCombustible()

    

    


    
            
    // const [isHidden, setIsHidden] = useState(true);
              
    // const toggleHidden = () => {setIsHidden(!isHidden);}

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const [isVisible6, setIsVisible6] = useState(false);
    const [isVisible7, setIsVisible7] = useState(false);
    const [isVisible8, setIsVisible8] = useState(false);
    const [isVisible9, setIsVisible9] = useState(false);


    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const toggleVisibility1 = () => {
        setIsVisible1(!isVisible1);
    };

    const toggleVisibility2 = () => {
        setIsVisible2(!isVisible2);
    };

    const toggleVisibility3 = () => {
        setIsVisible3(!isVisible3);
    };

    const toggleVisibility4 = () => {
        setIsVisible4(!isVisible4);
    };

    const toggleVisibility5 = () => {
        setIsVisible5(!isVisible5);
    };
    
    const toggleVisibility6 = () => {
        setIsVisible6(!isVisible6);
    };

    const toggleVisibility7 = () => {
        setIsVisible7(!isVisible7);
    };

    const toggleVisibility8 = () => {
        setIsVisible8(!isVisible8);
    };

    const toggleVisibility9 = () => {
        setIsVisible9(!isVisible9);
    };


    const comprobarOrdenDeCompra = useCallback(() => {
        return orden.length === 0 || nombre === "" || nombre.length <2;
        
    },[orden, nombre])


    useEffect(() => {
        comprobarOrdenDeCompra()
    },[orden, comprobarOrdenDeCompra])



    

    function handleGenerateFolio() {
        setFolio(uuidv4());
    }


    const [optionsonbras, setOptionsobras] = useState([]);
    const [options, setOptions] = useState([]);
    const [options01, setOptions01] = useState([]);
    const [options02, setOptions02] = useState([]);
    const [options03, setOptions03] = useState([]);
    const [options04, setOptions04] = useState([]);
    const [options05, setOptions05] = useState([]);
    const [options06, setOptions06] = useState([]);
    const [options07, setOptions07] = useState([]);
    const [options08, setOptions08] = useState([]);
    const [options09, setOptions09] = useState([]);
    const [selectedValueObras, setSelectedValueObras] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValue01, setSelectedValue01] = useState('');
    const [selectedValue02, setSelectedValue02] = useState('');
    const [selectedValue03, setSelectedValue03] = useState('');
    const [selectedValue04, setSelectedValue04] = useState('');
    const [selectedValue05, setSelectedValue05] = useState('');
    const [selectedValue06, setSelectedValue06] = useState('');
    const [selectedValue07, setSelectedValue07] = useState('');
    const [selectedValue08, setSelectedValue08] = useState('');
    const [selectedValue09, setSelectedValue09] = useState('');

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('/api/detalle');
        const data = await response.json();
        setOptions(data);
        setOptions01(data);
        setOptions02(data);
        setOptions03(data);
        setOptions04(data);
        setOptions05(data);
        setOptions06(data);
        setOptions07(data);
        setOptions08(data);
        setOptions09(data);
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

    const handleChange01 = (event) => {
        setDescripcion01(event.target.value);
    };

    const handleChange02 = (event) => {
        setDescripcion02(event.target.value);
    };


    const handleChange03 = (event) => {
        setDescripcion03(event.target.value);
    };


    const handleChange04 = (event) => {
        setDescripcion04(event.target.value);
    };


    const handleChange05 = (event) => {
        setDescripcion05(event.target.value);
    };


    const handleChange06 = (event) => {
        setDescripcion06(event.target.value);
    };

    const handleChange07 = (event) => {
        setDescripcion07(event.target.value);
    };

    const handleChange08 = (event) => {
        setDescripcion08(event.target.value);
    };

    const handleChange09 = (event) => {
        setDescripcion09(event.target.value);
    };


  const router = useRouter();

  function handleReloadClick() {
    router.reload();
  }

  




        


      
    
    return (
        <LayoutInicioAdminGeneral pagina='GenerarOrdenDeCompra O.C.'>
            {/* <p>{patente}</p> */}
            <h1 className="text-black text-lg font-semibold  text-center">Generar Orden De Compra</h1>
            <form 
                onSubmit={agregarOCAdmin}
                className="text-center grid grid-cols-1 gap-1"
            >
                
                
                <div className="grid grid-cols-1 gap-1" >
                    <div>
                        <label 
                            htmlFor="folio"
                            className="uppercase text-slate-800 font-bold text-xl hidden">Folio</label>
                        <input
                            id="folio"
                            type="text"
                            className="bg-gray-200 w-full lg:w-3/4 p-2 rounded-md hidden"  
                            value={folio}
                            onChange={e => setFolio(e.target.value)}
                        />
                    
                    </div>

                </div>


                <div className="">
                    <div className="grid gap-2 grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 shadow rounded-lg bg-white mb-3 p-3" >
                        {orden.map(proveedor=>(
                            <ResumenSolicitusGeneralAdmin key={proveedor.id} proveedor={proveedor}/>      
                        ))}

                        <div className="shadow rounded-lg p-2 bg-white mb-3">
                            <input
                                id="emisor"
                                type="text"
                                className="bg-gray-200 w-full p-2 rounded-md m-auto my-3"  
                                placeholder="Nº Cotizacion"
                                value={cotizacion}
                                onChange={e => setCotizacion(e.target.value)}
                            />
                        
                        </div>
                        <div className="shadow rounded-lg p-2 bg-white mb-3">
                            <input
                                id="fechasolicitud"
                                type="date"
                                className="bg-gray-200 w-full p-2 rounded-md m-auto my-3"  
                                value={fechasolicitud}
                                onChange={e => setFechasolicitud(e.target.value)}
                            />
                        
                        </div>

                        <div className="shadow rounded-lg p-2 bg-white mb-3">
                            <input
                                id="emisor"
                                type="text"
                                className="bg-gray-200 w-full p-2 rounded-md m-auto my-3"  
                                placeholder="Emisor"
                                value={emisor}
                                onChange={e => setEmisor(e.target.value)}
                            />
                        
                        </div>


                        
                        <div className="shadow rounded-lg p-2 bg-white mb-3">
                            <input
                                id="nombre"
                                type="text"
                                className="bg-gray-200 w-full p-2 rounded-md m-auto my-3"  
                                placeholder="Solicitante"
                                value={nombre}
                                onChange={e => setNombre(e.target.value)}
                            />
                        
                        </div>

                        <div className="shadow rounded-lg p-2 bg-white mb-3">
                            <select value={selectedValueObras} onChange={handleChangeObras} className="bg-gray-200 w-full p-2 rounded-md m-auto my-3">
                                <option value="">Obra {obra}</option>
                                {optionsonbras.map((option) => (
                                    <option key={option.id} value={option.value}>
                                        {option.nombre}
                                    </option>
                                ))}
                            </select>
                            <input
                                id="obra"
                                type="text"
                                className="bg-gray-200 w-full p-2 rounded-md hidden"  
                                value={obra}
                                onChange={e => setObra(e.target.value)}
                            />
                    
                        </div>

                    </div>
                </div>


                

                    

                

                


                <div className="p-2"></div>

                
            <div className="shadow rounded-lg p-2 bg-white">

                <table className="table-auto w-full text-center bg-white text-gray-700 ">
                    <tbody>
                        <tr>
                            <td className="px-2 py-4 w-1/6 text-center">Cantidad</td>
                            <td className="px-2 py-4 w-2/3 text-center">Detalle</td>
                            <td className="px-2 py-4 w-1/6 text-center">Valor</td>
                            <td className="px-2 py-4 w-1/12 text-center">➕</td>
                        </tr>
                        <tr className="bg-white border border-gray-200 ">
                            <td className="px-2 py-2 w-1/6 text-center  ">
                                <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad} onChange={e => setCantidad(e.target.value)}/>
                            </td>    
                            <td className="px-2 py-2 w-2/3 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion} onChange={e => setDescripcion(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-1/6 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={valor} onChange={e => setValor(e.target.value)}/>
                            </td>
                            
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <button
                                    type="button"
                                    className=""
                                    onClick={toggleVisibility}         
                                >
                                    {isVisible ? '➖':'➕'}
                                </button>
                            </td>
                        </tr>    
                        {isVisible && (

                            <tr className="bg-white border border-gray-200 ">
                                <td className="px-2 py-2 w-1/12 text-center  ">
                                    <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad01} onChange={e => setCantidad01(e.target.value)}/>
                                </td>
                                <td className="px-2 py-2 w-2/3 text-center  ">
                                    <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion01} onChange={e => setDescripcion01(e.target.value)}/>
                                </td>
                                <td className="px-2 py-2 w-2/3 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={valor01} onChange={e => setValor01(e.target.value)}/>
                            </td>
                                <td className="px-2 py-2 w-1/12 text-center  ">
                                    <button
                                        type="button"
                                        onClick={toggleVisibility1}           
                                    >                        
                                    {isVisible1 ? '➖':'➕'}
                                    </button>
                                </td>
                            </tr>    
                        )}

                        {isVisible1 && (

                        <tr className="bg-white border border-gray-200 ">
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad02} onChange={e => setCantidad02(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion02} onChange={e => setDescripcion02(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                            <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={valor02} onChange={e => setValor02(e.target.value)}/>
                        </td>
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <button
                                    type="button"
                                    onClick={toggleVisibility2}           
                                >                        
                                {isVisible2 ? '➖':'➕'}
                                </button>
                            </td>
                        </tr>    
                        )}

                        {isVisible2 && (

                        <tr className="bg-white border border-gray-200 ">
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad03} onChange={e => setCantidad03(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion03} onChange={e => setDescripcion03(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                            <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={valor03} onChange={e => setValor03(e.target.value)}/>
                        </td>
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <button
                                    type="button"
                                    onClick={toggleVisibility3}           
                                >                        
                                {isVisible3 ? '➖':'➕'}
                                </button>
                            </td>
                        </tr>    
                        )}

                        {isVisible3 && (

                        <tr className="bg-white border border-gray-200 ">
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad04} onChange={e => setCantidad04(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion04} onChange={e => setDescripcion04(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                            <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={valor04} onChange={e => setValor04(e.target.value)}/>
                        </td>
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <button
                                    type="button"
                                    onClick={toggleVisibility4}           
                                >                        
                                {isVisible4 ? '➖':'➕'}
                                </button>
                            </td>
                        </tr>    
                        )}

                        {isVisible4 && (

                        <tr className="bg-white border border-gray-200 ">
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad05} onChange={e => setCantidad05(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion05} onChange={e => setDescripcion05(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                            <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={valor05} onChange={e => setValor05(e.target.value)}/>
                        </td>
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <button
                                    type="button"
                                    onClick={toggleVisibility5}           
                                >                        
                                {isVisible5 ? '➖':'➕'}
                                </button>
                            </td>
                        </tr>    
                        )}

                        {isVisible5 && (

                        <tr className="bg-white border border-gray-200 ">
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad06} onChange={e => setCantidad06(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion06} onChange={e => setDescripcion06(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                            <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={valor06} onChange={e => setValor06(e.target.value)}/>
                        </td>
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <button
                                    type="button"
                                    onClick={toggleVisibility6}           
                                >                        
                                {isVisible6 ? '➖':'➕'}
                                </button>
                            </td>
                        </tr>    
                        )}

                        {isVisible6 && (

                        <tr className="bg-white border border-gray-200 ">
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad07} onChange={e => setCantidad07(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion07} onChange={e => setDescripcion07(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                            <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={valor07} onChange={e => setValor07(e.target.value)}/>
                        </td>
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <button
                                    type="button"
                                    onClick={toggleVisibility7}           
                                >                        
                                {isVisible7 ? '➖':'➕'}
                                </button>
                            </td>
                        </tr>    
                        )}

                        {isVisible7 && (

                        <tr className="bg-white border border-gray-200 ">
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad08} onChange={e => setCantidad08(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion08} onChange={e => setDescripcion08(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                            <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={valor08} onChange={e => setValor08(e.target.value)}/>
                        </td>
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <button
                                    type="button"
                                    onClick={toggleVisibility8}           
                                >                        
                                {isVisible8 ? '➖':'➕'}
                                </button>
                            </td>
                        </tr>    
                        )}

                        {isVisible8 && (

                        <tr className="bg-white border border-gray-200 ">
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <input id="ingreso" type="number" class="bg-gray-200 w-full p-1 rounded-md" value={cantidad09} onChange={e => setCantidad09(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                                <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={descripcion09} onChange={e => setDescripcion09(e.target.value)}/>
                            </td>
                            <td className="px-2 py-2 w-2/3 text-center  ">
                            <input id="ingreso" type="text" class="bg-gray-200 w-full p-1 rounded-md" value={valor09} onChange={e => setValor09(e.target.value)}/>
                        </td>
                            <td className="px-2 py-2 w-1/12 text-center  ">
                                <button
                                    type="button"
                                    onClick={toggleVisibility9}           
                                >                        
                                {isVisible9}
                                </button>
                            </td>
                        </tr>    
                        )}
                        
                        </tbody>
                        </table>
                        </div>



                

                <div className="mt-10">
                    <input
                        type="submit"
                        className= {`${comprobarOrdenDeCompra() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                        value="Generar O.C."
                        disabled={comprobarOrdenDeCompra()}
                        onClick={handleGenerateFolio}
                        
                        
                    />
                </div>




                
                
            </form>


            



            
        </LayoutInicioAdminGeneral>
   )
}