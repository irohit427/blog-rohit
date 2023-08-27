import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from "./pages/Wrapper";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <div className="dark:text-white dark:bg-black duration-1000">
        <Navbar />
        <Wrapper />
        <Footer /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
