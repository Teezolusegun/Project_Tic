import React, { Component } from "react";
import "./App.css";
import About from './components/About'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logout from "./components/Logout"
import Login from "./components/Login";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Faq from './components/Faq'
import Contact from './components/Contact'


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Register" component={Registration} />
             <Route  path="/home" component={Home} />
             <Route path='/logout' component={Logout} />
            <Route path='/about' component={About} />
         <Route path='/contact' component={Contact} />
         <Route path='/Faq' component={Faq} />
         
          </Switch>
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
