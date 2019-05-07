import React from 'react';
import {Link} from 'react-router-dom';

const Header: React.FC= () => {
  return(
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'lightgreen',
      height: '30px',
    }}>
      <span>React-router-programming-languages</span>
      <span>
        <Link to='/'>HOME</Link>
        /
        <Link to='/about'>ABOUT</Link>
      </span>
    </div>
  );
}

export default Header;