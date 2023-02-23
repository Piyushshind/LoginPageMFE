import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/views/Header/Header";
import LoginPage from "./components/views/LoginPage/LoginPage";
import Navbar from "./components/views/Navbar/Navbar";
import Hero from './components/views/Hero/Hero'
import { ProductCard } from "./components/views/ProductCard/ProductCard";
import "./index.css";
import Text from './components/views/Text/Text'
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Timepass from "./Timepass";
import Banner4 from "./components/views/Banner4/Banner4";
import MyButton from './components/views/MyButton/MyButton'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "HomePageMFE/Hero";
import Centerlizer from "./components/views/Centerlizer/Centerlizer";
import SingleProductPage from 'ProductPageMFE/SingleProductCard'

const App = () => {


  return (
    <BrowserRouter>
      < >
        <div >
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



          {/* <ProductCard /> */}


          {/* <Hero/>  */}
          {/* <Banner4>{<Text>Bhavish</Text>}
      {<MyButton>Shop Now</MyButton>}</Banner4> */}
        </div>
      </>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
