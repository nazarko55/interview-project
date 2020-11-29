import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NewsContainer from "./containers/newsContainers";
import ProfileContainer from "./containers/ProfileContainer";
import Login from "./components/login/Login";
import NotFound from "./components/notFound/NotFound";
import WeatherContainer from './containers/WeatherContainers';

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/news" component={NewsContainer} />
              <Route path="/profile" component={ProfileContainer} />
              <Route path="/weather" component={WeatherContainer} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}


export default App;