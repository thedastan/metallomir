'use client'
import React from 'react';
import Looking from './looking';
import Contact from '../home/contact';
import Logo from '../home/logo';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


 
const CatalogComponents = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,     
    });
  }, []);

  return (
    <div>
       <Looking/> 
       <Contact/>
       <Logo/>
    </div>
  );
};

export default CatalogComponents;