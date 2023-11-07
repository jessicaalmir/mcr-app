import { Grid } from "@mui/material"
import logo from '../../assets/mediapro_logo.png';

export const Home = () => {
  return (
    <Grid 
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight:'100vh', backgroundColor:'primary.secondary', padding:4}}
    >
       <Grid item>
            <img src={logo} alt="Logo" width="300vh" />
       </Grid>
    </Grid>
  )
}
