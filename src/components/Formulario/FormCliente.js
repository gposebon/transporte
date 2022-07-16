import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import { TextField, Button } from '@mui/material';

import { GlobalContext } from '../../GlobalContext'

const FormCliente = () => {

    const { addCliente } = useContext(GlobalContext)

    const valoresIniciales = {
        "nombre": "",
        "direccion": "",
        "telefono": "",
        "cuit": ""
    }


    const [data, setData] = useState(valoresIniciales)

    const agregarCliente = () => {
        addCliente(data)
    }

    const handleInputChange = (e) => { 
        const { name, value } = e.target;

        console.log(name, value)
        setData({
            ...data,
            [name]: value,
        });
    };


    return (
        <>
            <Box sx={{
                flexGrow: 1,
            }}
            >
                <Grid container>
                    <Grid>
                        <Box
                            sx={{
                                m: 2,
                            }}
                        >
                            <TextField
                                sx={{ m: 1 }}
                                defaultValue={data.nombre}
                                onChange={handleInputChange}
                                name="nombre"
                                label="Nombre"
                            />
                            <TextField
                                sx={{ m: 1 }}
                                defaultValue={data.direccion}
                                onChange={handleInputChange}
                                name="direccion" 
                                label="Direccion"
                            />
                            <TextField
                                sx={{ m: 1 }}
                                defaultValue={data.telefono}
                                onChange={handleInputChange}
                                name="telefono" 
                                label="Telefono"
                            />
                            <TextField
                                sx={{ m: 1 }}
                                defaultValue={data.cuit}
                                onChange={handleInputChange}
                                name="cuit" 
                                label="Cuit"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 5 }}>
                <Button variant="contained" onClick={() => agregarCliente()}> Registrar Cliente </Button>
            </Box>
        </>
    );
};
export default FormCliente;