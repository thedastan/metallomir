'use client'
import React from 'react';
import Looking from './looking';
import Contact from '../home/contact';
import Logo from '../home/logo';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box } from '@chakra-ui/react';


 
const CatalogComponents = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,     
    });
  }, []);

  return (
    <Box fontFamily="Gilroy">
       <Looking/> 
       <Contact/>
       <Logo/>
    </Box>
  );
};

export default CatalogComponents;