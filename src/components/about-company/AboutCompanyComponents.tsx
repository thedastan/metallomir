'use client'
import React from 'react';
import Hero from './hero';
import Contact from '../home/contact';
import Suppliers from './suppliers';
import Gallery from './gallery';
import AboutCompany from './about';

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@chakra-ui/react';


const AboutCompanyComponents = () => {


	useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,     
    });
  }, []);
  return (
    <Box fontFamily="Gilroy">
      <Hero/>
      <AboutCompany/>
      <Gallery/>
      <Suppliers/>
      <Contact/>
    </Box>
  );
};

export default AboutCompanyComponents;