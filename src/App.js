import React from "react";
import Home from "./components/home";
import Dashboard from "./components/dashboard"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Swal from 'sweetalert2';

function App(){
  return <div>
  <Router>
  <Route path="/" exact>
  <Home />
  </Route>
  <Route path="/dashboard" exact component = {Dashboard} />
  </Router>
  </div>
}

export default App;
