import { ReactElement } from 'react';
import logo from '../../assets/mediapro_logo.png';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { AssessmentOutlined, SettingsInputAntennaOutlined } from '@mui/icons-material';
import { mainTheme } from '../../theme';

interface SideBarProps{
    drawerWidth?: number;
} 

interface menuItem {
    text: string;
    icon: ReactElement;
    route: string;
  }

  const menuItems: menuItem[]=[
    {text:'Manage', icon:<SettingsInputAntennaOutlined />, route:'/manage'},
    {text:'Report', icon:<AssessmentOutlined />, route:'/report'}
  ];

export const SideBar:React.FC<SideBarProps> = ({drawerWidth}) => {
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
                    menuItems.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <Grid container>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
            </List>
        </Drawer>
    </Box>
  )
}
