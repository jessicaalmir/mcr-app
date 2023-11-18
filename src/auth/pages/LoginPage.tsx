import { Button, Grid, TextField } from "@mui/material"
import { useDispatch } from "react-redux";
import { Link as RouterLink} from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication } from "../../store/auth/thuks"

export const LoginPage = () => {

  const dispatch = useDispatch();
  const {email, password, onInputChange, formState} = useForm({
    email: 'jessica.alvarez@mediapro.tv',
    password: 'Valledupar123'
  });

  const onSubmit = (event: React.FormEvent) =>{
    event.preventDefault();
    console.log({email, password});
    dispatch(checkingAuthentication());
  }

  return (
    <AuthLayout title="Login">
    <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Email"
                type="email"
                placeholder="youremail@domain.com"
                fullWidth
                name = "email"
                value = {email} 
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{mt:2}}>
              <TextField
                label="Password"
                type="password"
                placeholder="yourpassword"
                fullWidth
                name = "password"
                value = {password} 
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12} sm={6}>
                <Button  type="submit" variant="contained" fullWidth>
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

