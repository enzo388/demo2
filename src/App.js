import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './componentes/inicio/landing';
/* import Home from './componentes/inicio/home'; */
function App() {
  return (
  
      <Switch>
     
      <Route path="/" component={Landing} />
    </Switch>
 
    
  );
}

export default App;
