// import react components
import React, { Component } from 'react';
import { Provider } from "react-redux";
// import react router
import {
  MemoryRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
// import material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from "./store";
// import custom MuiTheme
import {customMuiTheme} from './theme/pgTheme';
// import custom components
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Otp from './components/auth/Otp';
import Header from './components/common/Header';
import SubHeader from './components/common/SubHeader';
import HeaderOrderDetails from './components/common/HeaderOrderDetails';
import Footer from "./components/common/footer";
import './App.css';

injectTapEventPlugin();
// TODO: remove me


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={customMuiTheme}>
          <div>
            <Header/>
            <SubHeader/>
            <HeaderOrderDetails/>
            <div>
              <Router>
                <div>
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/otp" component={Otp} />
                  <Redirect to="/login" />
                </div>
              </Router>
            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App;
