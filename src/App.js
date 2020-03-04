import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  HashRouter,
  Switch
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Login from './containers/Login';
import Register from './components/Register';
import Home from './components/Home';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          
        </Switch>
      </Router>
    </HashRouter>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
