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



const App = () =>{
  
 
  return (
  
    < >
    
      {/* <Header /> */}
      {/* <Navbar /> */}
    
      {/* <ProductCard /> */}
      {/* <LoginPage />  */}
      {/* <RegisterPage /> */}
       <Hero/> 
      {/* <Banner4>{<Text>Bhavish</Text>}
      {<MyButton>Shop Now</MyButton>}</Banner4> */}
    </>
  );
} 
ReactDOM.render(<App />, document.getElementById("app"));
