import React from "react";
import './App.css';
import {Container} from "./components";
import {Header,Hero,MostPopular,Footer} from './sections/index';

function App() {
    return (
        <>
            <Header  />
            <Container>
                <Hero />
                <MostPopular />
            </Container>
            {/* <Footer />  */}
        </>
    );
}

export default App;


