import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { Button, Container, Paper, Typography, Grid, Box } from "@mui/material";
import lanchesImage from "./assets/lanches.png";
import pratosEspeciasImage from "./assets/pratos-especias.png";
import pratosExecutivosSaladas from "./assets/pratos-executivos-saladas.png";

const Home = () => {
    return (
        <Container maxWidth="sm">
            <Grid container justifyContent="center" alignItems="center" direction="column" sx={{ mt: 5, textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>Escaneie o QR Code para acessar o cardápio</Typography>

                <Typography variant="body1" sx={{ mt: 2 }}>
                    Ou <Button component={Link} to="/menu" variant="contained">clique aqui</Button> para ver o menu.
                </Typography>
            </Grid>
        </Container>
    );
};

const Menu = () => {
    const menuUrl = `${window.location.origin}/menu`;
    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <QRCodeSVG value={menuUrl} size={200} />
            </Paper>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
                <img src={lanchesImage} alt="Menu" style={{ width: "100%", maxWidth: "400px", height: "auto" }} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
                <img src={pratosEspeciasImage} alt="Menu" style={{ width: "100%", maxWidth: "400px", height: "auto" }} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
                <img src={pratosExecutivosSaladas} alt="Menu" style={{ width: "100%", maxWidth: "400px", height: "auto" }} />
            </Box>
        </Container>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
            </Routes>
        </Router>
    );
};

export default App;
