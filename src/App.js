import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Jokes from "./views/Jokes";
import theme from "./components/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{
          display: "block",
          justifyContent: "center",
          alignItems: "center",
          marginTop: '10px',
        }}>
          <Jokes />
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App