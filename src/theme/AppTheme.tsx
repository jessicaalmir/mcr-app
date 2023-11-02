import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {mainTheme} from "./";

interface AppThemeProps{
    children?: React.ReactNode;
} 

export const AppTheme:React.FC<AppThemeProps> = ({children}) => {
    return (
        <ThemeProvider theme={mainTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
