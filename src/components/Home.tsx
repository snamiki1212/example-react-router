import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Techs } from '../TechData';

const Home: React.FC= () => {
  return(
    <>
      <Header />
      <p>ルーティングした情報を表示するサンプル</p>
      {Techs.map(tech => {
        const to = `/${tech.id.toString()}`;
        return(
          <li key={tech.id}>
            <Link to={to}>{tech.name}</Link>
          </li>
        )
      })}
      <Footer />
    </>
  );
}

export default Home;