import { Button, Grid, TextField } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const ForgotPasswordPage = () => {
  return (
    <AuthLayout title="Recover Password">
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
            <Grid container spacing={2} sx={{mb:2, mt:1}}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
        
  )
}

