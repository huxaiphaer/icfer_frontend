import React, { Component } from 'react';
import './styles/App.css';
import {LoginPage} from "./containers/LoginPage";
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import {NavbarComponent} from "./components/Navbar";
import Dashboard from "./containers/Dashboard";
import {ToastContainer} from "react-toastify";


class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <main>
                  <NavbarComponent/>
                  <ToastContainer />
                  <Switch>
                      <Route path='/' component={LoginPage} exact />
                      <Route path='/dashboard' component={Dashboard}/>
                  </Switch>
              </main>
          </div>
        </Router>
    );
  }
}

export default App;
