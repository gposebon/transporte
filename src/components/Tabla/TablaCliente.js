import React, { useContext } from 'react';
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

import { ClienteContext } from '../../ClienteContext'

const TablaCliente = () => {

    const { clientes, addCliente } = useContext(ClienteContext)

    const tituloColumnas = ["Nombre", "Direccion", "Telefono", "Cuit"]

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
                    {clientes.map((cliente) => (
                        <TableRow
                            key={cliente.id_cliente}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {cliente.nombre_cliente}
                            </TableCell>
                            <TableCell align="left">{cliente.direccion_cliente}</TableCell>
                            <TableCell align="left">{cliente.telefono_cliente}</TableCell>
                            <TableCell align="left">{cliente.cuit_cliente}</TableCell>
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

export default TablaCliente