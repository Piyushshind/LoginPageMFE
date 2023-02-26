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
import HomePage from 'HomePageMFE/HomePage'
const App = () => {


  return (
    <BrowserRouter>
      <div >
        <Header />
        <Navbar />
        <Footer />
        <Centerlizer>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signIn' element={<RegisterPage />} />
            <Route path='/product' element={<SingleProductPage />} />
            <Route path='/checkout' element={<SingleProductPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Centerlizer>
      </div>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
