import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {QRCodeSVG} from "qrcode.react";
import {Box, Container, Paper} from "@mui/material";
import lanchesImage from "./assets/lanches.png";
import pratosEspeciasImage from "./assets/pratos-especias.png";
import pratosExecutivosSaladas from "./assets/pratos-executivos-saladas.png";
import porcoes from "./assets/porcoes.png";
import cervejas from "./assets/cervejas.png";
import drink from "./assets/drink.png";

const Menu = () => {
    const menuUrl = `${window.location.origin}`;
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
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
                <img src={porcoes} alt="Menu" style={{ width: "100%", maxWidth: "400px", height: "auto" }} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
                <img src={cervejas} alt="Menu" style={{ width: "100%", maxWidth: "400px", height: "auto" }} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5 }}>
                <img src={drink} alt="Menu" style={{ width: "100%", maxWidth: "400px", height: "auto" }} />
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
