import React from 'react';
import Home from "./components/Home";
import "./app.scss";
import About from "./components/About";
import Creations from "./components/Creations";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Home />
      <About />
      <Creations />
      <Footer />
    </>
  );
}

export default App;
