import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Marvel from './components/pages/Marvel';
import DC from './components/pages/DC';
import cyclops from './components/Heros_of_Marvel/cyclops';
import captain from './components/Heros_of_Marvel/captain';
import hulk from './components/Heros_of_Marvel/hulk';
import daredevil from './components/Heros_of_Marvel/daredevil';
import hawkeye from './components/Heros_of_Marvel/hawkeye';
import iron from './components/Heros_of_Marvel/iron';
import silver from './components/Heros_of_Marvel/silver';
import spider from './components/Heros_of_Marvel/spider';
import thor from './components/Heros_of_Marvel/thor';
import wolverine from './components/Heros_of_Marvel/wolverine';
import arrow from './components/Heros_of_DC/arrow';
import batman from './components/Heros_of_DC/batman';
import robin from './components/Heros_of_DC/robin';
import martian from './components/Heros_of_DC/martian';
import blue from './components/Heros_of_DC/blue';
import canary from './components/Heros_of_DC/canary';
import linter from './components/Heros_of_DC/linter';
import flash from './components/Heros_of_DC/flash';
import superman from './components/Heros_of_DC/superman';
import wonder from './components/Heros_of_DC/wonder';
import { Component } from 'react';


class App extends Component {
  state={
    buscador: " ",
  }
  render() { 
return (
    <>
        <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/marvel' component={Marvel} />
          
          <Route path='/dc' component={DC} />
          <Route path='/cyclops' component={cyclops} />
          <Route path='/captain' component={captain} />
          <Route path='/hulk' component={hulk} />
          <Route path='/daredevil'  component={daredevil} />
          <Route path='/hawkeye' component={hawkeye} />
          <Route path='/iron' component={iron} />
          <Route path='/silver' component={silver} />
          <Route path='/spider' component={spider} />
          <Route path='/thor' component={thor} />
          <Route path='/wolverine' component={wolverine} />
          <Route path='/arrow' component={arrow} />
          <Route path='/batman' component={batman} />
          <Route path='/canary' component={canary} />
          <Route path='/blue' component={blue} />
          <Route path='/flash' component={flash} />
          <Route path='/martian' component={martian} />
          <Route path='/linter' component={linter} />
          <Route path='/robin' component={robin} />
          <Route path='/superman' component={superman} />
          <Route path='/wonder' component={wonder} />
        </Switch>
      </Router>
    </>
    );
  }
}


export default App;
