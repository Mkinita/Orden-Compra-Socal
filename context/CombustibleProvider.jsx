import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const CombustibleContext = createContext()


const CombustibleProvider = ({children}) => {
    const [faenas, setFaenas] = useState([])
    // const [proveedores, setProveedores] = useState([])
    // const [pedidos, setPedidos] = useState([])
    // const [fechas, setFechas] = useState([])
    // const [fechauno, setFechauno] = useState([])
    // const [fechados, setFechados] = useState([])
    
    const [faenaActual, setFaenaActual] = useState({})
    // const [proveedoresactual, setProveedoresActual] = useState({})
    const [equipo, setEquipo] = useState({})
    const [faena, setFaena] = useState({})
    const [proveedor, setProveedor] = useState({})
    
    const [modal, setModal] = useState(false)
    const [pedido, setPedido] = useState([])
    const [pedido01, setPedido01] = useState([])
    const [pedido02, setPedido02] = useState([])
    const [pedido03, setPedido03] = useState([])
    const [orden, setOrden] = useState([])
    const [folio, setFolio] = useState('')
    const [obra, setObra] = useState('')
    const [obras, setObras] = useState({})
    const [nombre, setNombre] = useState('')
    const [emisor, setEmisor] = useState('')

    const [nombre01, setNombre01] = useState('')
    const [rut01, setRut01] = useState('')

    const [cantidad, setCantidad] = useState(0)
    const [descripcion, setDescripcion] = useState('')
    const [valor, setValor] = useState(0)

    const [cantidad01, setCantidad01] = useState('')
    const [descripcion01, setDescripcion01] = useState('')
    const [valor01, setValor01] = useState('')


    const [cantidad02, setCantidad02] = useState('')
    const [descripcion02, setDescripcion02] = useState('')
    const [valor02, setValor02] = useState('')


    const [cantidad03, setCantidad03] = useState('')
    const [descripcion03, setDescripcion03] = useState('')
    const [valor03, setValor03] = useState('')

    const [cantidad04, setCantidad04] = useState('')
    const [descripcion04, setDescripcion04] = useState('')
    const [valor04, setValor04] = useState('')

    const [senores, setSenores] = useState('')
    const [direccion, setDireccion] = useState('')
    const [rut, setRut] = useState('')
    const [fono, setFono] = useState('')
    const [comuna, setComuna] = useState('')

    const [propietario, setPropietario] = useState('')
    const [Kilometraje, setKilometraje] = useState('')
    // const [total, setTotal] = useState(0)
    // const [currentDate, setCurrentDate] = useState(new Date())
    const [proveedorId, setProveedorId] = useState(null)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const {patente} = equipo
    const [nuevapatente, setNuevapatente] = useState({patente})
    


    const router = useRouter()
    

    const obtenerFaenas = async () => {
        const {data} = await axios('/api/faenas')
        setFaenas(data)
    }
    useEffect(() => {
        obtenerFaenas()
    },[])


    // const obtenerProveedores = async () => {
    //     const {data} = await axios('/api/proveedores')
    //     setProveedores(data)
    // }
    // useEffect(() => {
    //     obtenerProveedores()
    // },[])





    // const obtenerPedidos = async () => {
    //     const {data} = await axios('/api/admin')
    //     setPedidos(data)
    // }
    // useEffect(() => {
    //     obtenerPedidos()
    // },[])



    // const obtenerFechas = async () => {
    //     const {data} = await axios('/api/fechas')
    //     setFechas(data)
    // }
    // useEffect(() => {
    //     obtenerFechas()
    // },[])


    // const obtenerFechasUno = async () => {
    //     const {data} = await axios('/api/fechasuno')
    //     setFechauno(data)
    // }
    // useEffect(() => {
    //     obtenerFechasUno()
    // },[])



    // const obtenerFechasDos = async () => {
    //     const {data} = await axios('/api/fechasdos')
    //     setFechados(data)
    // }
    // useEffect(() => {
    //     obtenerFechasDos()
    // },[])



    


     

    
    

    useEffect(() => {
        setFaenaActual(faenas[0])
    },[faenas])



    useEffect(() => {
        setFaenaActual(faenas[0])
    },[faenas])



    // useEffect(() => {
    //     setProveedoresActual(proveedores[0])
    // },[proveedores])
    


    


    // useEffect(() => {
    //     const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad ) + total, 0)

    //     setTotal(nuevoTotal)
    // }, [pedido])



    
    


   


    

    const handleClickFaena = id =>{
        const faena = faenas.filter(cat => cat.id === id)
        setFaenaActual(faena[0])
        router.push('/')
    }


    const handlesetEquipo = equipo => {
        setEquipo(equipo)
    }


    const handlesetProveedor = proveedor => {
        setProveedor(proveedor)
    }

    

    const handlesetObra = obras => {
        setObras(obras)
    }


    const handleChangeModal = () => {
        setModal(!modal)
    }


    const handleAgregarPedido = ({faenaId, ...equipo}) => {
        if(pedido.some(equipoState => equipoState.id === equipo.id)) {
           // Actualizar la cantidad
           const pedidoActualizado = pedido.map(equipoState => equipoState.id === equipo.id ? equipo : equipoState)
           setPedido(pedidoActualizado)

           toast.success('Guardado Correctamente')
           setTimeout(() =>{
            router.push('/pedido01')
        },2000)
        } else {
            setPedido([...pedido, equipo])
            toast.success('Agregado Solicitud')
            setTimeout(() =>{
                router.push('/pedido01')
            },2000)
            
        }

        setModal(false)
        
    }



    const handleAgregarPedidoObra = ({faenaId, ...equipo}) => {
        if(pedido.some(equipoState => equipoState.id === equipo.id)) {
           // Actualizar la cantidad
           const pedidoActualizado = pedido.map(equipoState => equipoState.id === equipo.id ? equipo : equipoState)
           setPedido(pedidoActualizado)

           toast.success('Guardado Correctamente')
           setTimeout(() =>{
            router.push('/pedidoobra')
        },2000)
        } else {
            setPedido([...pedido, equipo])
            toast.success('Agregado Solicitud')
            setTimeout(() =>{
                router.push('/pedidoobra')
            },2000)
            
        }

        setModal(false)
        
    }



    const handleAgregarPedido01 = ({...proveedor}) => {
        if(pedido01.some(proveedorState => proveedorState.id === proveedor.id)) {
            // Actualizar la cantidad
            const pedidoActualizado = pedido01.map(proveedorState => proveedorState.id === proveedor.id ? proveedor : proveedorState)
            setPedido01(pedidoActualizado)
 
            toast.success('Agregado Proveedor')
            setTimeout(() =>{
             router.push('/generarordencompra')
         },2000)
            
         } else {
             setPedido01([...pedido01, proveedor])
             toast.success('Agregado Proveedor')
             setTimeout(() =>{
                 router.push('/resumen')
             },2000)
         }
 
         setModal(false)
        
    }


    const handleAgregarPedido03 = ({...obras}) => {
        if(pedido03.some(proveedorState => proveedorState.id === obras.id)) {
            // Actualizar la cantidad
            const pedidoActualizado = pedido03.map(proveedorState => proveedorState.id === obras.id ? obras : proveedorState)
            setPedido03(pedidoActualizado)
 
            toast.success('Agregado Proveedor')
            setTimeout(() =>{
             router.push('/generarordencompraobra')
         },2000)
            
         } else {
             setPedido03([...pedido03, obras])
             toast.success('Agregado Proveedor')
             setTimeout(() =>{
                 router.push('/generarordencompraobra')
             },2000)
         }
 
         setModal(false)
        
    }





    const handleAgregarOrden = ({...proveedor}) => {
        if(orden.some(proveedorState => proveedorState.id === proveedor.id)) {
           // Actualizar la cantidad
           const pedidoActualizado = orden.map(proveedorState => proveedorState.id === proveedor.id ? proveedor : proveedorState)
           setOrden(pedidoActualizado)

           toast.success('Agregado Proveedor')
           setTimeout(() =>{
            router.push('/generarordencompra')
        },2000)
           
        } else {
            setOrden([...orden, proveedor])
            toast.success('Agregado Proveedor')
            setTimeout(() =>{
                router.push('/generarordencompra')
            },2000)
        }

        setModal(false)
        
    }


    const handleAgregarOrdenObra = ({...obras}) => {
        if(pedido.some(obraState => obraState.id === obras.id)) {
           // Actualizar la cantidad
           const pedidoActualizado = pedido.map(obraState => obraState.id === obras.id ? obras : obraState)
           setOrden(pedidoActualizado)

           toast.success('Agregado Proveedor')
           setTimeout(() =>{
            router.push('/generarordencompraobra')
        },2000)
           
        } else {
            setOrden([...pedido, obras])
            toast.success('Agregado Proveedor')
            setTimeout(() =>{
                router.push('/generarordencompraobra')
            },2000)
        }

        setModal(false)
        
    }


    // const handleEditarCantidades = id => {
    //     const productoActualizar = pedido.filter( producto => producto.id === id)
    //     setProducto(productoActualizar[0])
    //     setModal(!modal)
    // }



    const handleElimanarSolicitud = id => {
        const pedidoActualizado = pedido.filter( equipo => equipo.id !== id)
        setPedido(pedidoActualizado)
        toast.error('Solicitud Eliminada')
        setTimeout(() =>{
            router.push('/combustible')
        },2000)
    }


    const handleElimanarSolicitudProveedor = id => {
        const pedidoActualizado01 = pedido01.filter( proveedor => proveedor.id !== id)
        setPedido01(pedidoActualizado01)
        toast.error('Solicitud Eliminada')
        setTimeout(() =>{
            router.push('/pedido01')
        },2000)
    }


    const handleElimanarSolicitudGeneral = id => {
        const pedidoActualizadoGeneral = orden.filter( proveedor => proveedor.id !== id)
        setOrden(pedidoActualizadoGeneral)
        toast.error('Solicitud Eliminada')
        setTimeout(() =>{
            router.push('/proveedores')
        },2000)
    }






    const colocarOrden = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/ordenes',{pedido,nombre,cantidad,descripcion,folio, obra, valor,pedido01,emisor,patente,valor,propietario,Kilometraje, fecha: new Date()})
            // Resetear la app
            setFaenaActual(faenas[0])
            setPedido([])
            setFolio('')
            setNombre('')
            setCantidad(0)
            setDescripcion('')
            setSenores('')
            setDireccion('')
            setRut('')
            setFono('')
            setComuna('')
            setNuevapatente('')
            setObra('')
            setValor('')
            setPropietario('')
            setKilometraje('')
            setPedido01([])

            toast.success('Generando Orden De Compra ⏳')

            setTimeout(() =>{
                router.push('/orden-compra')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }



    


    const agregarOC = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/generaroc',{orden,nombre,obra,emisor,
            cantidad,descripcion,valor,
            cantidad01,descripcion01,valor01,
            cantidad02,descripcion02,valor02,
            cantidad03,descripcion03,valor03,
            cantidad04,descripcion04,valor04
            ,folio, fecha: new Date()})
            // Resetear la app
            setFolio('')
            setOrden([])
            setObra('')
            setNombre('')
            setCantidad(0)
            setCantidad01('')
            setCantidad02('')
            setCantidad03('')
            setCantidad04('')
            setDescripcion('')
            setDescripcion01('')
            setDescripcion02('')
            setDescripcion03('')
            setDescripcion04('')
            setValor('')
            setValor01('')
            setValor02('')
            setValor03('')
            setValor04('')
            toast.success('Generando Orden De Compra ⏳')

            setTimeout(() =>{
                router.push('/orden-compra-general')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }




    const agregarOCObra= async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/generarocobra',{pedido03,pedido,nombre,obra,emisor,patente,propietario,Kilometraje,
            cantidad,descripcion,fecha: new Date()})
            // Resetear la app
            setPedido03([])
            setPedido([])
            setObra('')
            setNombre('')
            setKilometraje(0)
            setPropietario('')
            setDescripcion('')
            setCantidad(0)
            toast.success('Generando Orden De Compra ⏳')

            setTimeout(() =>{
                router.push('/ordenes-pendiente-combustible-obra')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }




    const agregarProveedor = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/generarproveedor',{nombre,rut,direccion,fono,comuna})
            // Resetear la app
            setNombre('')
            setDireccion('')
            setRut('')
            setFono('')
            setComuna('')
            toast.success('Agregando Nuevo Proveedor⏳')

            setTimeout(() =>{
                router.push('/listadoproveedores')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }






    const agregarDetalle = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/generardetalle',{nombre})
            // Resetear la app
            setNombre('')
            toast.success('Agregando Nuevo detalle⏳')

            setTimeout(() =>{
                router.push('/listadodetalle')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }




    const agregarFaena = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/generarfaena',{nombre})
            // Resetear la app
            setNombre('')
            toast.success('Agregando Nueva⏳')

            setTimeout(() =>{
                router.push('/agregarobra')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }




    const agregarUsuario = async (e) => {
        e.preventDefault()

        try {
           await axios.post('/api/generarusuario',{email,password})
            // Resetear la app
            setEmail('')
            setPassword('')
            toast.success('Agregando Nuevo Usuario⏳')

            setTimeout(() =>{
                router.push('/listadousuarios')
            },3000)

        } catch (error) {
            console.log(error)
        }


        console.log('agregando orden')
    }




    


    


        
    




    return(
        <CombustibleContext.Provider
        value={{
            faenas,
            faenaActual,
            handleClickFaena,
            equipo,
            proveedor,
            handlesetEquipo,
            handlesetProveedor,
            modal,
            handleChangeModal,
            pedido,
            handleAgregarPedido,
            handleElimanarSolicitud,
            handleAgregarOrden,
            folio,
            nombre,
            emisor,setEmisor,


            valor,setValor,
            cantidad,
            descripcion,

            valor01,setValor01,
            cantidad01,setCantidad01,
            descripcion01,setDescripcion01,

            valor02,setValor02,
            cantidad02,setCantidad02,
            descripcion02,setDescripcion02,

            valor03,setValor03,
            cantidad03,setCantidad03,
            descripcion03,setDescripcion03,

            valor04,setValor04,
            cantidad04,setCantidad04,
            descripcion04,setDescripcion04,
            
            senores,
            direccion,
            rut,
            fono,
            comuna,
            nuevapatente,
            proveedorId,
            setProveedorId,
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
            colocarOrden,
            agregarOC,
            setOrden,
            setProveedor,
            agregarProveedor,
            orden,
            agregarDetalle,
            obra,setObra,
            agregarFaena,
            faena,
            handleAgregarPedido01,
            pedido01,
            setPedido01,
            handleElimanarSolicitudProveedor,
            handleElimanarSolicitudGeneral,
            agregarUsuario,
            email,
            setEmail,
            password,
            setPassword,
            propietario,
            Kilometraje,
            setKilometraje,
            setPropietario,
            handleAgregarPedidoObra,
            handlesetObra,
            obras,
            setObras,
            pedido02,
            setPedido02,
            pedido03,
            setPedido03,
            handleAgregarOrdenObra,
            agregarOCObra,
            handleAgregarPedido03
            
            
            // total,
            // pedidos,
            // fechas,
            // fechauno,
            // fechados
        }}
        
        
        >
            {children}
        </CombustibleContext.Provider>
    )
}
export {
    CombustibleProvider
}


export default CombustibleContext