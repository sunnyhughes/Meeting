// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Navigation from './Navigation';
import ProfilePage from './ProfilePage';
import BasicInfoPage from './BasicInfoPage';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/navigation" component={Navigation} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/basic-info" component={BasicInfoPage} />
          <Route exact path="/" component={HomePage} /> {/* Use 'exact' for the home page route */}
          {/* Add more routes for other pages */}
          </Switch>
        </Router>
      );
    }
    
    export default App;
    