import React from 'react';
import './styles/App.css';
import TopBar from './TopBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="App">
    

     <Router>
       <Switch>
         <Route path='/' exact component={Home}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
