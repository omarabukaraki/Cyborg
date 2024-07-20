import React from "react";
import './App.css';
import {Container} from "./components";
import {Header,Hero,MostPopular,GamingLibrary,Footer} from './sections/index';

function App() {
    return (
        <>
            <Header  />
            <Container>
                <Hero />
                <MostPopular />
                <GamingLibrary />
            </Container>
            {/* <Footer />  */}
        </>
    );
}

export default App;


