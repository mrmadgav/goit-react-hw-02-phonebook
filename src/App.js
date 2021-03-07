import React, { Component } from "react";
import "modern-normalize/modern-normalize.css";
import Phone from "./components/Phone/Phone.jsx";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Login from "./redux/Auth/Login/Login";
import Register from "./redux/Auth/Register/Register";
import NavBar from "./redux/Auth/NavBar/NavBar";
import PrivateRoute from "./components/Routes/PrivateRoute";
import { getCurrentUser } from "./redux/Auth/Auth-operations";
import Section from "./components/Section/Section.jsx";
import { getIsAuthenticated } from "./redux/Auth/Auth-selectors";
import MainNav from "./components/MainNav/MainNav";
import styles from "./App.module.css";
import MainPage from "./components/MainPage/MainPage";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Section>
        <Route path="/" component={NavBar} />
        <div className={styles.mainWrapper}>
          <Route path="/" component={MainNav} />
          {/* {!this.props.isAuthenticated && ( */}
          <>
            <Switch>
              <Route path="/" exact component={MainPage} />
              {!this.props.isAuthenticated && (
                <Route path="/login" exact component={Login} />
              )}
              {!this.props.isAuthenticated && (
                <Route path="/register" exact component={Register} />
              )}
              <PrivateRoute
                path="/contacts"
                component={Phone}
                redirectTo="/login"
              />
            </Switch>
          </>
        </div>
      </Section>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});
const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
