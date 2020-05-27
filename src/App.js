import React from 'react';
import './css/App.css';
import Home from './components/Home'
import Menu from './components/Menu'
import Lista from './components/Lista'
import Producto from './components/Producto'
import Donde from './components/Donde'
import Editar from './components/Editar'
import EditForm from './components/EditForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Menu />
    <div className="App">
        <Switch>
        <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/dondeEstamos" component={Donde}/>
          <Route exact path="/lista" component={Lista}/>
          <Route exact path="/producto/:id" component={Producto}/>
          <Route exact path="/editar" component={Editar}/>
          <Route exact path="/editForm/:id" component={EditForm}/>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
