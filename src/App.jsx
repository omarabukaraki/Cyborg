import React from "react";
import './App.css';
import { Container } from "./components";
import { Header, Footer } from './sections/index';
import { Home, Browser, Details, Streams, Profile } from './pages/index'
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

function App() {
    return (
        <>
           <Router>
           <Header />
            <Container>
                <Routes>
                   <Route path="/" element={ <Home />}/>
                   <Route path="/Browser" element={ <Browser/>}/>
                   <Route path="/Details" element={ <Details/>}/>
                   <Route path="/Streams" element={ <Streams/>}/>
                   <Route path="/Profile" element={ <Profile/>}/>
                </Routes>
            </Container>
            <Footer />
           </Router>
        </>
    );
}

export default App;


