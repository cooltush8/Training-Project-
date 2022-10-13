import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
// import Navbar from './pages';
import Product from './pages/Product/Product';
import Why from './pages/Why/Why';
import How from './pages/how it works/How';
import Pricing from './pages/pricing/Pricing';
import ResCommunity from './pages/ResCommunity/ResCommunity';
import Navbar from './Components/navbar';



function App() {

  // const homeRef= useRef(null);
  // const NavbarRef = useRef(null);
    const ProductRef = useRef(null);
   const WhyRef = useRef(null);
   const HowRef = useRef(null);
    const PricingRef = useRef(null);
    const ResCommunityRef = useRef(null);
  

  const onRefClick = ( targetRef ) =>{
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }


  return (
    <Router className="App">
    
    <Navbar ProductRef={ProductRef} WhyRef={WhyRef} HowRef={HowRef}  PricingRef={PricingRef} ResCommunityRef={ResCommunityRef} onRefClick={onRefClick}/>
     <Product ref={ProductRef} />
     <Why   ref={WhyRef} />
     <How  ref={HowRef}/>
     <Pricing  ref={PricingRef}/>
     <ResCommunity ref={ResCommunityRef}/>

     

     

     

    </Router>
  );
}



export default App;



{/* <Router className="App">
    
    <Navbar ProductRef = { ProductRef } onRefClick={scrollEffect}/>
    <Navbar WhyRef = { WhyRef } onRefClick={scrollEffect}/>
    <Navbar HowRef = { HowRef } onRefClick={scrollEffect}/>
    <Navbar PricingRef = { PricingRef } onRefClick={scrollEffect}/>
    
     <Product ref={ProductRef } /> */}
