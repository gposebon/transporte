import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormControl, TextField, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { GlobalContext } from '../../GlobalContext';

const FormFlete = () => {

    const { addFlete } = useContext(GlobalContext)

    const [data, SetData] = useState( {
    "fecha":"26/07/2022", 
    "procede":"Maximo Paz", 
    "destino" :"Alcorta",
    "cp":"00000-00000156", 
    "km":10, 
    "tn" :30,
    "tarifa":1000, 
    "importeFlete": 0, 
    "ltsGasOil":100, 
    "precioGasOil":150, 
    "totalGasOil": 0, 
    "proveedorGasOil":"Petro", 
    " gastosPeaje":1000, 
    "gastosPuerto":1000,
    "otrosGastos":0, 
    "totalGastos":0, 
    "porcentajeDescuento" :10,
    "totalDescuento":0, 
    "porcentajeChofer":10,
    "totalChofer":0, 
    "chofer":"1", 
    "cliente":"1",
    })

    const agregarFlete = (e) => {
        addFlete(data)
    }

    return (
        <>
            <Box sx={{
                flexGrow: 1,
            }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                m: 2,
                            }}
                        >
                            <TextField sx={{ m: 1 }} id="flete_fecha" label="Fecha" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_kilometros" label="Kilometros" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_litros_gasoil" label="Litros GasOil" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_peaje" label="Peaje" variant="standard" />
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value=""
                                    label="Cliente"
                                >
                                    <MenuItem value={10}>Balsuar</MenuItem>
                                    <MenuItem value={20}>Transporte Rena</MenuItem>
                                    <MenuItem value={30}>Clave de Fa</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                m: 2,
                            }}
                        >
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="demo-simple-select-label">Procede</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value=""
                                    label="Procede"
                                >
                                    <MenuItem value={10}>Maximo Paz</MenuItem>
                                    <MenuItem value={20}>La Cesira</MenuItem>
                                    <MenuItem value={30}>San Nicolas</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField sx={{ m: 1 }} id="flete_toneladas" label="Toneladas" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_precio_gasoil" label="Precio GasOil" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_gastos" label="Gastos" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_porcentaje_flete" label="Porcentaje Flete" variant="standard" />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                m: 2,
                            }}
                        >
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="demo-simple-select-label">Destino</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value=""
                                    label="Destino"
                                >
                                    <MenuItem value={10}>Maximo Paz</MenuItem>
                                    <MenuItem value={20}>La Cesira</MenuItem>
                                    <MenuItem value={30}>San Nicolas</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField sx={{ m: 1 }} id="flete_tarifa" label="Tarifa" variant="standard" />
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="demo-simple-select-label">Proveedor GasOil</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value= ""
                                    label="Proveedor GasOil"
                                >
                                    <MenuItem value={10}>Petro</MenuItem>
                                    <MenuItem value={20}>Cooperativa</MenuItem>
                                    <MenuItem value={30}>YPF</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField sx={{ m: 1 }} id="flete_entrega" label="Entrega" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_porcentaje_camionero" label="Porcentaje Camionero" variant="standard" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{
                flexGrow: 1,
                mt:5,
            }}
            >
            </Box>
            <Box sx={{ mt:5}}>
                <Button variant="contained" onClick={ () => agregarFlete() }> Registrar Flete </Button>
            </Box>
        </>
    );
};
export default FormFlete;