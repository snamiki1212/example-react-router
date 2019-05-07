import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Techs } from '../TechData';

const Home: React.FC= () => {
  return(
    <>
      <Header />
      <p>技術情報を表示するアプリ</p>
      {Techs.map(tech => {
        return(
          <li key={tech.id}>
            <Link to={tech.name}>{tech.name}</Link>
          </li>
        )
      })}
      <Footer />
    </>
  );
}

export default Home;