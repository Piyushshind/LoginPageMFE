import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/views/Header/Header";
import Navbar from "./components/views/Navbar/Navbar";
import "./index.css";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "HomePageMFE/Hero";
import Centerlizer from "./components/views/Centerlizer/Centerlizer";
import { RecoilRoot } from "recoil";
import ErrorPage from "./components/views/ErrorPage/ErrorPage";
import Footer from 'HomePageMFE/Footer'
import HomePage from 'HomePageMFE/HomePage'
const App = () => {


  return (
    <BrowserRouter>
    <RecoilRoot>
      < >
      
        <div >
          <Header />
          <Navbar />
          <Footer />
          {/* <AppHeader /> */}
          <Centerlizer>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signIn' element={<RegisterPage />} />
              <Route path='/product' element={<SingleProductPage />} />
              <Route path='/checkout' element={<SingleProductPage />} />
              <Route path="*" element={<ErrorPage />}/>
              
            </Routes>


          </Centerlizer>



          {/* <ProductCard /> */}


          {/* <Hero/>  */}
          {/* <Banner4>{<Text>Bhavish</Text>}
      {<MyButton>Shop Now</MyButton>}</Banner4> */}
        </div>
      </>
      </RecoilRoot>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
