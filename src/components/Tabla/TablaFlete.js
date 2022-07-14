import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ButtonGroup } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { GlobalContext } from '../../GlobalContext'

const TablaFlete = () => {

    const {getFletes, fletes} = useContext(GlobalContext)

    useEffect(() => {
        getFletes()
    }, [])

    const tituloColumnas = ["Fecha", "Procede", "Destino","CP", "Km.", "Tn.", "Tarifa", "Importe Flete", 
    "Lts Gas Oil","Precio GasOil", "Total GasOil", "Proveedor GasOil", "Gastos Peaje", "Gastos Puerto",
    "Otros Gastos", "Total Gastos", "% descuento", "Total Desc", "% Chofer", "Total Chofer", "Chofer", "Cliente"]

    return (
        <TableContainer component={Paper} sx={{ border: 1 }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        {tituloColumnas.map((titulo) => (
                            <TableCell>{titulo}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fletes.map((flete) => (
                        <TableRow
                            key={flete.id_flete}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{flete.fecha_flete}</TableCell>
                            <TableCell align="left">{flete.procede_flete}</TableCell>
                            <TableCell align="left">{flete.destino_flete}</TableCell>
                            <TableCell align="left">{flete.cartadeporte_flete}</TableCell>
                            <TableCell align="left">{flete.kilometros_flete}</TableCell>
                            <TableCell align="left">{flete.toneladas_flete}</TableCell>
                            <TableCell align="left">{flete.tarifa_flete}</TableCell>
                            <TableCell align="left">{flete.importe_flete}</TableCell>
                            <TableCell align="left">{flete.gasoil_flete}</TableCell>
                            <TableCell align="left">{flete.preciogasoil_flete}</TableCell>
                            <TableCell align="left">{flete.totalgasoil_flete}</TableCell>
                            <TableCell align="left">{flete.proveedorgasoil_flete}</TableCell>
                            <TableCell align="left">{flete.gastospeaje_flete}</TableCell>
                            <TableCell align="left">{flete.gastospuerto_flete}</TableCell>
                            <TableCell align="left">{flete.otrosgastos_flete}</TableCell>
                            <TableCell align="left">{flete.totalgastos_flete}</TableCell>
                            <TableCell align="left">{flete.porcentajedescuento_flete}</TableCell>
                            <TableCell align="left">{flete.totaldescuento_flete}</TableCell>
                            <TableCell align="left">{flete.porcentajechofer_flete}</TableCell>
                            <TableCell align="left">{flete.totalchofer_flete}</TableCell>
                            <TableCell align="left">{flete.idchofer_flete}</TableCell>
                            <TableCell align="left">{flete.idcliente_flete}</TableCell>
                            <TableCell align="left">
                                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                <IconButton aria-label="delete" size="small">
                                        <EditIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton aria-label="delete" size="small">
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TablaFlete