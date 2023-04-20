import LayoutCombustible from "../layout/LayoutCombustible"
import { useEffect, useCallback, useState } from "react"
import useCombustible from "../hooks/useCombustible"
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';



export default function Solicitud() {
    const { id,pedido, folio, nombre, cantidad, descripcion,
            senores,
            direccion,
            rut,
            fono,
            comuna,
            nuevapatente,
            setFolio,
            setNombre,
            setCantidad,
            setDescripcion,
            setSenores,
            setDireccion,
            setRut,
            setFono,
            setComuna,
            setNuevapatente,
            equipo,
            proveedor01,
            obra,setObra,
            proveedor,
            emisor,setEmisor,
            valor,setValor,
            propietario,
            setPropietario,
            Kilometraje,setKilometraje,

            colocarOrden } = useCombustible()



        const [optionsonbras, setOptionsobras] = useState([]);
        const [options, setOptions] = useState([]);

        const [selectedValueObras, setSelectedValueObras] = useState('');
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




            


    const comprobarPedido = useCallback(() => {
        return pedido.length === 0 || nombre === "" || nombre.length <2;
        
    },[pedido, nombre])


    useEffect(() => {
        comprobarPedido()
    },[pedido, comprobarPedido])



    

        function handleGenerateFolio() {
            setFolio(uuidv4());
        }


        const router = useRouter();

  function handleReloadClick() {
    router.reload();
  }


        


      
    
    return (
        <LayoutCombustible pagina='Solicitud O.C.'>
            {/* <p>{patente}</p> */}
            <h1 className="text-2xl font-black">Generar Orden De Compra Combustible</h1>
            <p className="text-2xl my-10"></p>

            <form 
                onSubmit={colocarOrden}
                className="text-center"
            >
                <div>
                    <label 
                        htmlFor="folio"
                        className="uppercase text-slate-800 font-bold text-xl hidden">Folio</label>
                    <input
                        id="folio"
                        type="text"
                        className="bg-gray-200 w-full p-2 rounded-md hidden"  
                        value={folio}
                        onChange={e => setFolio(e.target.value)}
                    />
                
                </div>




                <div>
                    <label 
                        htmlFor="nuevapatente"
                        className="uppercase text-slate-800 font-bold text-xl hidden">Patente</label>
                    <input
                        id="nuevapatente"
                        type="text"
                        className="bg-gray-200 w-full p-2 rounded-md hidden"  
                        value={nuevapatente}
                        onChange={e => setNuevapatente(e.target.value)}
                    />
                
                </div>



                


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


                <div>
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
                    
                    </div>

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


                    <div className="flex-1 w-16">
                        <label 
                            htmlFor="valor"
                            className="block uppercase text-slate-800 font-bold text-sm py-5">Valor</label>
                        <input
                            id="valor"
                            type="text"
                            className="bg-gray-200 w-full p-2 rounded-md"  
                            value={valor}
                            onChange={e => setValor(e.target.value)}
                        />
                    
                    </div>

                    
                </div>



                <div className="flex gap-1 p-2" >
                    <div className="flex-1 w-16">

                        <label 
                            htmlFor="Kilometraje"
                            className="block uppercase text-slate-800 font-bold text-sm py-5">Kilometraje</label>
                        <input
                            id="Kilometraje"
                            type="number"
                            className="bg-gray-200 w-full p-2 rounded-md"  
                            value={Kilometraje}
                            onChange={e => setKilometraje(e.target.value)}
                        />
                    
                    </div>

                    <div className="flex-1 w-16">
                        <label 
                            htmlFor="propietario"
                            className="block uppercase text-slate-800 font-bold text-sm py-5">Propietario</label>
                        <select
                            id="propietario"
                            className="bg-gray-200 w-full p-2 rounded-md"
                            value={propietario}
                            onChange={e => setPropietario(e.target.value)}
                        >
                            <option value="opcion0">-</option>
                            <option value="Socal">Socal</option>
                            <option value="Arrendado">Arrendado</option>
                        </select>
                    </div>

                    
                </div>

                <div className="mt-10 col-span-2 ">
                    <p className="text-2xl">
                       
                    </p>
                </div>

                <div className="mt-10">
                    <input
                        type="submit"
                        className= {`${comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600 hover:bg-indigo-800'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
                        value="Generar O.C."
                        disabled={comprobarPedido()}
                        onClick={handleGenerateFolio}
                        
                    />
                </div>
            </form>
        </LayoutCombustible>
   )
}