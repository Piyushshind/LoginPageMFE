import Footer from 'HomePageMFE/Footer';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Header from "./components/views/Header/Header";
import Navbar from "./components/views/Navbar/Navbar";
import RoutingComponant from './components/views/RoutingComponant/RoutingComponant';
import "./index.css";
const App = () => {
  return (
    < >
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        <Navbar />
        <RoutingComponant />
        <Footer />
        </RecoilRoot>
   </BrowserRouter>
   </>
  );
}           
ReactDOM.render(<App />, document.getElementById("app"));
