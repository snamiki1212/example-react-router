import React from 'react';
import {spring, AnimatedSwitch} from 'react-router-transition';
import {Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Tech from './components/Tech';
import './App.css';

const App: React.FC = () => {
  function mapStyles(styles: any) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }
  function bounce(val: number) {
    return spring(val, {
      stiffness: 130,
      damping: 22,
    });
  }
  return (
    <div className="App">
      <AnimatedSwitch
        atEnter={{ opacity: 0, scale: 0 }}
        atLeave={{ opacity: bounce(0), scale: bounce(7) }}
        atActive={{ opacity: bounce(1), scale: bounce(1) }}
        mapStyles={mapStyles}
        className="switch-wrapper"
      >
        <Route path="/about" component={About} />
        <Route path="/:id" component={Tech} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </AnimatedSwitch>
    </div>
  );
}

export default App;
