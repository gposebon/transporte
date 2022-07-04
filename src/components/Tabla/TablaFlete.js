import * as React from 'react';
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

const tituloColumnas = ["Cod", "Fecha", "Procede", "Destino", "Km.", "Tn.", "Tarifa", "Total", "Gas Oil"
    , "Lts.", "Gastos", "Entrega", "Cliente"]

const viajes = [
    {
        "id": 1,
        "cod": 1,
        "fecha": "05/05/2022",
        "procede": "M. Paz",
        "destino": "S. Lorenzo",
        "kilometros": 150,
        "toneladas": 10,
        "tarifa": 3000,
        "total": 300000,
        "gasoil": 12400,
        "litros": 150,
        "gastos": 3500,
        "entrega": 12000,
        "cliente": "Centro"
    },
    {
        "id": 2,
        "cod": 2,
        "fecha": "05/05/2022",
        "procede": "M. Paz",
        "destino": "S. Lorenzo",
        "kilometros": 150,
        "toneladas": 10,
        "tarifa": 3000,
        "total": 300000,
        "gasoil": 12400,
        "litros": 150,
        "gastos": 3500,
        "entrega": 12000,
        "cliente": "Centro"

    },
    {
        "id": 3,
        "cod": 3,
        "fecha": "05/05/2022",
        "procede": "M. Paz",
        "destino": "S. Lorenzo",
        "kilometros": 150,
        "toneladas": 10,
        "tarifa": 3000,
        "total": 300000,
        "gasoil": 12400,
        "litros": 150,
        "gastos": 3500,
        "entrega": 12000,
        "cliente": "Centro"

    },
    {
        "id": 4,
        "cod": 4,
        "fecha": "05/05/2022",
        "procede": "M. Paz",
        "destino": "S. Lorenzo",
        "kilometros": 150,
        "toneladas": 10,
        "tarifa": 3000,
        "total": 300000,
        "gasoil": 12400,
        "litros": 150,
        "gastos": 3500,
        "entrega": 12000,
        "cliente": "Centro"

    },
]

export default function TablaFlete() {
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
                    {viajes.map((viaje) => (
                        <TableRow
                            key={viaje.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {viaje.cod}
                            </TableCell>
                            <TableCell align="left">{viaje.fecha}</TableCell>
                            <TableCell align="left">{viaje.procede}</TableCell>
                            <TableCell align="left">{viaje.destino}</TableCell>
                            <TableCell align="left">{viaje.kilometros}</TableCell>
                            <TableCell align="left">{viaje.toneladas}</TableCell>
                            <TableCell align="left">{viaje.tarifa}</TableCell>
                            <TableCell align="left">{viaje.total}</TableCell>
                            <TableCell align="left">{viaje.gasoil}</TableCell>
                            <TableCell align="left">{viaje.litros}</TableCell>
                            <TableCell align="left">{viaje.gastos}</TableCell>
                            <TableCell align="left">{viaje.entrega}</TableCell>
                            <TableCell align="left">{viaje.cliente}</TableCell>
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
