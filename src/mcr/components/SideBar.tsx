import logo from '../../assets/mediapro_logo.png';
import { Box, Divider, Drawer, Grid, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { AssessmentOutlined, SettingsInputAntennaOutlined } from '@mui/icons-material';
import { mainTheme } from '../../theme';


interface SideBarProps{
    drawerWidth?: number;
} 

export const SideBar:React.FC<SideBarProps> = ({drawerWidth}) => {


    const menuItems =[
        {text:'Manage', icon:<SettingsInputAntennaOutlined />, url:'/manage'},
        {text:'Report', icon:<AssessmentOutlined />, url:'/report'}
      ];
    return (
        <Box 
            component="nav"
            sx={{ width:{ sm: drawerWidth }, flexShrink: { sm: 0} }}
        >
            <Drawer
                variant="permanent" //show the navbar permanent
                open
                sx={{
                    display:{xs:'block'},
                    '& .MuiDrawer-paper':{boxSizing: 'border-box', width: drawerWidth},
                    backgroundColor: mainTheme.palette.primary.main

                }}
            >
                <Toolbar>
                    <img src={logo} alt="Logo" width={50} height={50}/>
                    <Typography variant="h6" noWrap component="div">
                        MCR APP
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {
                        menuItems.map((item) => (
                            <ListItemButton key={item.text} href={item.url}>
                                <Grid container>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </Grid>
                            </ListItemButton>
                        ))}
                </List>
            </Drawer>
        </Box>
    )
}
