import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<HomePage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}