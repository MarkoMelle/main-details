import React from "react";
import ServicesList from "./components/servicesList";
import ServicesDetails from "./components/serviceDetails";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Button variant="outlined" component={Link} to="/" sx={{ mt: 2 }}>
          Список услуг
        </Button>
        <Routes>
          <Route path="/" element={<ServicesList />} />
          <Route path="/services/:id/details" element={<ServicesDetails />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
