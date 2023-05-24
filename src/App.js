import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";

import Navigation from "./ui/blocks/navigation/Navigation";
import Footer from "./ui/blocks/footer/Footer";

import './style/base.css';

import MainPage from "./pages/main/MainPage";
import AboutPage from "./pages/about/AboutPage";
import CatalogPage from "./pages/catalog/CatalogPage";
import ContactPage from "./pages/contact/ContactPage";
import InfoPage from "./pages/info/InfoPage";
import AuthPage from "./pages/auth/AuthPage";


function App() {
  return (
    <HashRouter>
        <Navigation/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/catalog" element={<CatalogPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/info" element={<InfoPage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
        </Routes>
        <Footer/>
    </HashRouter>
  );

}

export default App;
