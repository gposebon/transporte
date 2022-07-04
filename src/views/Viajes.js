import BotonNuevo from "../components/Botones/BotonNuevo"
import TablaFlete from '../components/Tabla/TablaFlete'
import { Link } from "react-router-dom"

const Viajes = () => {
    return (
        <>
            <Link to='/formularioFlete'>
                <BotonNuevo descripcion="Nuevo Viaje" />
            </Link>
            <TablaFlete />
        </>
    )
}

export default Viajes