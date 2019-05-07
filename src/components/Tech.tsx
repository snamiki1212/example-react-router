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
  
  return (tech === undefined) ? (<Redirect to='/' />) : ( 
    <div>
      <Header />
      <p>
        <span>ID: {tech.id}</span>
        <span>/ NAME: {tech.name}</span>
        <span>/ SIDE: {whereToUse[tech.side]}</span>
      </p>
      <p style={{width: '50%', margin: 'auto'}}>{tech.memo}</p>
      <Footer />
    </div>
  )
}

export default withRouter(Tech);