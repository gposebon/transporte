import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormControl, TextField, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { GlobalContext } from '../../GlobalContext';

const FormFlete = () => {

    const { addFlete, clientes } = useContext(GlobalContext)

    const valoresIniciales = {
        "fecha":"", 
        "procede":"", 
        "destino" :"",
        "cp":"", 
        "km": 0, 
        "tn" : 0,
        "tarifa": 0, 
        "importeFlete": 0, 
        "ltsGasOil": 0, 
        "precioGasOil": 0, 
        "totalGasOil":  0, 
        "proveedorGasOil": "", 
        "gastosPeaje": 0, 
        "gastosPuerto":0,
        "otrosGastos":0, 
        "totalGastos":0, 
        "porcentajeDescuento":0,
        "totalDescuento":0, 
        "porcentajeChofer":0,
        "totalChofer":0, 
        "chofer": 0, 
        "cliente": 0,
        }

    const [data, setData] = useState(valoresIniciales)

    const agregarFlete = () => {
        addFlete(data)
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
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <Box
                            sx={{
                                m: 2,
                            }}
                        >
                            <TextField
                                sx={{ m: 1 }}
                                defaultValue={data.fecha}
                                onChange={handleInputChange}
                                name="fecha"
                                label="Fecha"
                            />
                            <TextField
                                sx={{ m: 1 }}
                                defaultValue={data.procede}
                                onChange={handleInputChange}
                                name="procede"
                                label="Procede"
                            />
                            <TextField
                                sx={{ m: 1 }}
                                defaultValue={data.destino}
                                onChange={handleInputChange}
                                name="destino"
                                label="Destino"
                            />
                            <TextField
                                sx={{ m: 1 }}
                                defaultValue={data.cp}
                                onChange={handleInputChange}
                                name="cp"
                                label="Carta de Porte"
                            />
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value=""
                                    label="Cliente"
                                >
                                    {clientes.map( (cliente) => {
                                        <MenuItem >{cliente.nombre_cliente}</MenuItem>
                                    })}
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