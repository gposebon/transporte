import React, { useContext, useEffect } from 'react';

import { Container } from "@mui/material"

import TablaFlete from '../Tabla/TablaFlete'
import TablaCliente from '../Tabla/TablaCliente'

import { GlobalContext } from '../../GlobalContext'

const Contenedor = () => {

    const {getClientes, getFletes} = useContext(GlobalContext)
    
    useEffect(() => {
        getClientes()
    }, [])

    useEffect(() => {
        getFletes()
    }, [])

    return (
        <Container>
            <TablaFlete />
            <TablaCliente />
        </Container>
    )
}

export default Contenedor