import React, {FC} from 'react';
import { RouteComponentProps, withRouter} from 'react-router';
import {Redirect} from 'react-router-dom';
import {Techs, TechData, whereToUse} from '../TechData';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Tech = {} & RouteComponentProps<{id: string}>

const Tech: FC<Tech> = ({history, location, match}) => {
  const techId = parseInt(match.params.id);
  const tech = Techs.find( (tech: TechData) => tech.id === techId);
  
  console.log(tech);
  return (tech === undefined) ? (<Redirect to='/' />) : ( 
    <div>
      <Header />
      <p>ID: {tech.id}</p>
      <p>NAME: {tech.name}</p>
      <p>SIDE: {whereToUse[tech.side]}</p>
      <Footer />
    </div>
  )
}

export default withRouter(Tech);