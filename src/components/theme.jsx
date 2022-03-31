
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#3f51b5",
        },
        secondary: {
            main: "#ededed",
        },
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                html: {
                    height: "100%",
                },
                body: {
                    textAlign: "center",
                    backgroundColor: "#ededed",
                },
                "*": {
                    userSelect: "none",
                },
            },
        },
    },
})

export default theme;