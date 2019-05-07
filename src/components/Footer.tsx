import React from 'react';
import {REPOSITORY_URL} from '../config';

const Footer: React.FC= () => {
  return(
    
      <div style={{
        backgroundColor: 'lightgreen'
      }}>
      this app is created by nash >> <a href={REPOSITORY_URL}>github</a>.
      </div>
    
  );
}

export default Footer;