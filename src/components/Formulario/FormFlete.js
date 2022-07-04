import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FormControl, TextField, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const FormFlete = () => {

    const [proveedorGasOil, setProveedorGasOil] = React.useState('');
    const [cliente, setCliente] = React.useState('');
    const [procede, setProcede] = React.useState('');
    const [destino, setDestino] = React.useState('');
    const [totalFlete, setTotalFlete] = React.useState(15000)
    const [totalGastos, setTotalGastos] = React.useState(3000)
    const [totalGasOil, setTotalGasOil] = React.useState(22500)
    const [totalPorcentajeCamionero, setTotalPorcentajeCamionero] = React.useState(12000)
    const [totalFleteConDescuento, setTotalFleteConDescuento] = React.useState(12000)


    const handleChangeProveedor = (event) => {
        setProveedorGasOil(event.target.value);
    };

    const handleChangeCliente = (event) => {
        setCliente(event.target.value);
    };

    const handleChangeProcede = (event) => {
        setProcede(event.target.value);
    };

    const handleChangeDestino = (event) => {
        setDestino(event.target.value);
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
                            <TextField sx={{ m: 1 }} id="flete_fecha" label="Fecha" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_kilometros" label="Kilometros" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_litros_gasoil" label="Litros GasOil" variant="standard" />
                            <TextField sx={{ m: 1 }} id="flete_peaje" label="Peaje" variant="standard" />
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                <InputLabel id="demo-simple-select-label">Cliente</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={cliente}
                                    label="Cliente"
                                    onChange={handleChangeCliente}
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
                                    value={procede}
                                    label="Procede"
                                    onChange={handleChangeProcede}
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
                                    value={destino}
                                    label="Destino"
                                    onChange={handleChangeDestino}
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
                                    value={proveedorGasOil}
                                    label="Proveedor GasOil"
                                    onChange={handleChangeProveedor}
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
                <TextField
                    sx={{
                        mr:4,
                    }}
                    disabled
                    id="filled-disabled"
                    label="Total Flete"
                    defaultValue= {totalFlete}
                    variant="filled"
                />
                <TextField
                    sx={{
                        mr:4,
                    }}
                    disabled
                    id="filled-disabled"
                    label="Total Flete con descuento"
                    defaultValue= {totalFleteConDescuento}
                    variant="filled"
                />
                <TextField
                    sx={{
                        mr:4,
                    }}
                    disabled
                    id="filled-disabled"
                    label="Total Gastos"
                    defaultValue= {totalGastos}
                    variant="filled"
                />
                <TextField
                    sx={{
                        mr:4,
                    }}
                    disabled
                    id="filled-disabled"
                    label="Total GasOil"
                    defaultValue= {totalGasOil}
                    variant="filled"
                />
                <TextField
                    sx={{
                        mr:4,
                    }}
                    disabled
                    id="filled-disabled"
                    label="Porcentaje Camionero"
                    defaultValue= {totalPorcentajeCamionero}
                    variant="filled"
                />
            </Box>
            <Box sx={{ mt:5}}>
                <Button variant="contained"> Registrar Flete </Button>
            </Box>
        </>
    );
};
export default FormFlete;