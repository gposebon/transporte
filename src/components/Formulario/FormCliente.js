import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField, Button } from '@mui/material';

import { ClienteContext } from '../../ClienteContext'

const FormCliente = () => {

    const { addCliente } = useContext(ClienteContext)
    
    const [data, SetData] = useState( {
        "nombre": "Coop Murphy",
        "direccion": "Murphy",
        "telefono": "034615258",
        "cuit": "2525252525"
    })
    useEffect( () => {
    const agregarCliente = (e) => {
        e.preventDefault()
        addCliente(data)
    }
}, [])

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
                            <TextField sx={{ m: 1 }} id="flete_fecha" label="Fecha" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_kilometros" label="Kilometros" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_litros_gasoil" label="Litros GasOil" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_peaje" label="Peaje" variant="standard" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt:5}}>
                <Button variant="contained" onClick={agregarCliente}> Registrar Cliente </Button>
            </Box>
        </>
    );
};
export default FormCliente;