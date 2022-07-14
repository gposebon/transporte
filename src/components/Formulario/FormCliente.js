import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { TextField, Button } from '@mui/material';

import { GlobalContext } from '../../GlobalContext'

const FormCliente = () => {

    const { addCliente } = useContext(GlobalContext)
    
    const [data, SetData] = useState( {
        "nombre": "Prueba4",
        "direccion": "Santa Teresa",
        "telefono": "034615258",
        "cuit": "2525252525"
    })

    const agregarCliente = (e) => {
        addCliente(data)
    }

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
                <Button variant="contained" onClick={() => agregarCliente()}> Registrar Cliente </Button>
            </Box>
        </>
    );
};
export default FormCliente;