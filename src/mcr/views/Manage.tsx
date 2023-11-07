import { Grid, Paper, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

export const Manage = () => {
    return (
        <Grid container direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
            <Typography>Hola</Typography>
            <TableContainer component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell>Column 1
                        </TableCell>
                    </TableRow>
                </TableHead>
            </TableContainer>
        </Grid>
    )
}
