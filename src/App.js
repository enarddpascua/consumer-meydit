import { Container, Paper, Typography, AppBar, Toolbar } from "@mui/material";
import ConsumerForm from "./components/ConsumerForm";

function App() {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <AppBar
        position="absolute"
        color="primary"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            MeydIT
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Post a job
        </Typography>
        <ConsumerForm />
      </Paper>
    </Container>
  );
}

export default App;
