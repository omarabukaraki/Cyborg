import React from "react";
import './App.css';
import { Header, Footer, Container } from "./components";


function App() {
    return (
        <>
            <Header  />
            <Container>content</Container>
            <Footer /> 
        </>
    );
}

//Because it's the primary
export default App;


// {/* <Header text="Header Props" name="header name" color="blue" />
// {/* <Container /> */}
// <Container>
//     Contenttttt
// </Container>{/* closing component*/}
// <Footer /> self closing component */}