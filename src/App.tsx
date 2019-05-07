import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Tech from './components/Tech';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/:id" component={Tech} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
