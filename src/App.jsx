import HomePage from "HomePageMFE/Hero";
import SingleProductPage from 'ProductPageMFE/SingleProductCard';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Centerlizer from "./components/views/Centerlizer/Centerlizer";
import Header from "./components/views/Header/Header";
import LoginPage from "./components/views/LoginPage/LoginPage";
import Navbar from "./components/views/Navbar/Navbar";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import "./index.css";

const App = () => {


  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <Centerlizer>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signIn' element={<RegisterPage />} />
              <Route path='/product' element={<SingleProductPage />} />
              <Route path='/checkout' element={<SingleProductPage />} />
            </Routes>
        </Centerlizer>

      </div>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
