import React from 'react';
import {Link} from 'react-router-dom';

const Home: React.FC= () => {
  return(
    <>
      <p>
      test message
      <Link to='/about'>LINK</Link>
      <Link to='/'>HOME</Link>
      </p>
    </>
  );
}

export default Home;