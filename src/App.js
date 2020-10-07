import React from 'react';
// import logo from './logo.svg';
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TvSeries from "./pages/TvSeries";
import Movies from "./pages/Movies";
import TabSwitcher from "./layouts/TabSwitcher";
import {Tab} from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        <Layout>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/movies">
            <Movies/>
          </Route>
          <Route path="/">
            <TabSwitcher/>
            {/*<TvSeries/>*/}
          </Route>
        </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
