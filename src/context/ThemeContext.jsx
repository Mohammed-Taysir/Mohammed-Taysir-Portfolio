import { createContext, useState } from "react";
import theme from "../theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";


export const ThemeContext = createContext(null);

const ThemeContextProvider = ({children}) => {
    const [mode, setMode] = useState('dark');
    const currentTheme = theme(mode);

    

    return <ThemeContext.Provider value = {{mode, setMode}}>
        <ThemeProvider theme = {currentTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    </ThemeContext.Provider>

}

export default ThemeContextProvider;