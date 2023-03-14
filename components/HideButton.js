const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('https://orden-compra-socal-production.up.railway.app/api/detalle');
        const data = await response.json();
        setOptions(data);
        };
        fetchData();
    }, []);

    const handleChange = (event) => {
        setDescripcion(event.target.value);
    };


    <select value={selectedValue} onChange={handleChange} className="block uppercase text-slate-800 font-bold text-sm py-5">
                                    <option value="">Detalle</option>
                                    {options.map((option) => (
                                        <option key={option.id} value={option.value}>
                                        {option.nombre}
                                        </option>
                                    ))}
                                </select>