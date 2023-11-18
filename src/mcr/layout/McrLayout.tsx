import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";
import { Outlet } from "react-router-dom";
 
const drawerWidth: number = 240; /**Components width */

export const McrLayout = () => {
  return (
    <Box sx={{display:'flex'}}>
        <NavBar drawerWidth={drawerWidth}/>
        <SideBar drawerWidth={drawerWidth}/>
        <Box
            component='main'
            sx={{
              flexGrow: 1,
              p: 3,
              width: `calc(100% - ${drawerWidth})`,
              minHeight: "100vh"
            }}
        >
          <Toolbar />
          <Outlet />
        </Box>
    </Box>
  )
}
