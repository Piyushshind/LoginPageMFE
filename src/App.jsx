import SingleProductPage from 'ProductPageMFE/SingleProductCard';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Centerlizer from "./components/views/Centerlizer/Centerlizer";
import Header from "./components/views/Header/Header";
import Navbar from "./components/views/Navbar/Navbar";
import "./index.css";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import ErrorPage from "./components/views/ErrorPage/ErrorPage";
import Footer from 'HomePageMFE/Footer'
import HomePage from './components/views/HomePage/HomePage';
import RoutingComponant from './components/views/RoutingComponant/RoutingComponant';
const App = () => {
  return (
    <BrowserRouter>
      < >
        <Header />
        <Navbar />
        <RoutingComponant />
        <Footer />
      </>
   </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
