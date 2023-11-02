import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const mainTheme = createTheme ({
    palette:{
        primary:{
            main:'#212223'
        },
        secondary:{  
            main:'#E8473E'
        },
        error:{
            main:red[100]
        }
    }
});
