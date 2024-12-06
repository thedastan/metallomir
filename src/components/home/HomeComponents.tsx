'use client'
import React from 'react';
import Hero from './hero';
import Materials from './materials';
import Guarantee from './guarantee';
import Advantages from './advantages';
import Looking from './looking';
import Services from './services';
import Contact from './contact';
import About from './about';
import { Box } from '@chakra-ui/react';
import Logo from './logo';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
 

const HomeComponents = () => {
  

	useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,     
    });
  }, []);

  return (
    <>
    
     <Box fontFamily="Gilroy">
      <Hero/>
      <Materials/>
      <About/>
      <Guarantee/>
      <Advantages/>
      <Looking/>
      <Services/>
      <Contact/>
      <Logo/>
    </Box>
    </>
  );
};

export default HomeComponents;