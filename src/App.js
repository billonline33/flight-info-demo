import React from 'react';
import './App.css';
import FlightMaster from './pages/FlightMaster/FlightMaster';
import FlightDetail from './pages/FlightDetail/FlightDetail';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact component={FlightMaster} />
          <Route
            path="/flightmaster"
            exact
            render={() => {
              return <FlightMaster />;
            }}
          />
          <Route path="/flightdetail/:id" exact component={FlightDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
