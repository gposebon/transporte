import { Button, ButtonGroup, Box } from "@mui/material"

const BotonNuevo = ({descripcion}) => {
    return (
        <Box sx={{ m: 2 }}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>{descripcion}</Button>
            </ButtonGroup>
        </Box>
    )
}

export default BotonNuevo