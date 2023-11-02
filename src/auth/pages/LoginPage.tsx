import { Button, Grid, TextField } from "@mui/material"
import { Link as RouterLink} from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
    <form>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Email"
                type="email"
                placeholder="youremail@domain.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Password"
                type="password"
                placeholder="yourpassword"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <RouterLink to={"/auth/forgot-pwd"} color="inherit">
              Forgot Password
            </RouterLink>
          </Grid>
        </form>
    </AuthLayout>
        
  )
}

