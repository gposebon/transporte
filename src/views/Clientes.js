import BotonNuevo from "../components/Botones/BotonNuevo"
import TablaCliente from '../components/Tabla/TablaCliente'
import { Link } from "react-router-dom"

const Clientes = () => {
    return (
        <>
            <Link to='/formularioCliente'>
                <BotonNuevo descripcion="Nuevo Cliente" />
            </Link>
            <TablaCliente />
        </>
    )
}

export default Clientes