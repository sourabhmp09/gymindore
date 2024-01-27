import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasicExample from "./components/Navbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FitnessGoal from "./components/FitnessGoal";
import BestOffers from "./components/BestOffers";
import BestPlan from "./components/BestPlan";
import TestoMonial from "./components/TestoMonial";
import Test from "./components/Test";
import Servise from "./components/Servise";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import Test3 from "./components/Test3";
 AOS.init();
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

 

  return (
    <>
      <Navbar />
      {/* <SignUp/> */}
      <Hero />
      <FitnessGoal />
      <BestOffers />
       <Servise/>
      <BestPlan />

     
      {/* <TestoMonial/> */}
      <Test/>

      <BrowserRouter>
        <Routes>

          <Route path="signup" element={<SignUp/>}/>
               
        </Routes><Footer/>

      </BrowserRouter>
 
      <Test3/>
    </>
  );
}

export default App;
