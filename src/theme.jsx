import { createTheme } from "@mui/material";



const theme = (mode) => createTheme({
    palette: {
        mode,
    ...(mode === 'light' ? {
        primary: { main: "#16a34a" },       
        background: {
            default: "#fff",
            paper: "#f4f4f5",
        },
        text: {
            primary: "#09090b",
            secondary: "#71717a",
            disabled: "#9CA3AF",
        },
        divider: "#E5E7EB",
        borderColor: {
            main: '#e5e7eb'
        }
    } : {
        primary: { main: "#22c55e" },
        background: {
            default: "#0c0a09",
            paper: "#27272a",
        },
        text: {
            primary: "#F1F5F9",
            secondary: "#a1a1aa",
            disabled: "#64748B",
        },
        divider: "#334155",
        borderColor: {
            main: '#27272a'
        }
    })
    }
});

export default theme;