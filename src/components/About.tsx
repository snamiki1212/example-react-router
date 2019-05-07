import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC= ():any => {
  return(
    <>
      <Header />
      <p>
      このサンプルはreact-routerを理解するために作られたものです。
      </p>
      <Footer /> 
    </>
  );
}

export default About;