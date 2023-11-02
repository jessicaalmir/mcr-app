import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";
interface McrLayoutProps{
    children?: React.ReactNode;
} 
const drawerWidth: number = 240; /**Components width */

export const McrLayout: React.FC<McrLayoutProps> = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        <NavBar  drawerWidth={drawerWidth}/>
        <SideBar drawerWidth={drawerWidth}/>
        <Box
            component='main'
            sx={{flexGrow: 1, p: 3}}
        >
            <Toolbar />
            {children}
        </Box>
    </Box>
  )
}
