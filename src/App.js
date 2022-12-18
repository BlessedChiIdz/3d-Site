import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import NavBar from "./NavBar";
import React from "react";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
