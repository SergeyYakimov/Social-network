import React from 'react';
import store from './Redux/redux-store.js';
import {Provider, connect} from 'react-redux'; 
import {compose} from 'redux';
import {withRouter, Route, HashRouter, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import UsersContainer from './components/Users/UsersContainer.js';
import HeaderContainer from './components/Header/HeaderContainer.js';
import LoginPage from './components/login/login.jsx';
import Preloader from './components/common/Preloader/Preloader.js';
import {initializeApp} from './Redux/app-reducer.js';
import {withSuspense} from './hoc/withSuspense.js';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.js'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.js'));

class App extends React.Component {

  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("Some error occured");
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {

    if (!this.props.initialized) {
        return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/">
              <Redirect from="/" to="/profile" />
            </Route> 
            <Route path="/messages" render={withSuspense(DialogsContainer)}/>
            <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
            <Route path="/users" render={() => <UsersContainer />}/>
            <Route path="/login" render={() => <LoginPage />}/>
            <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
          </Switch>
        </div>
      </div> 
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(withRouter,connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
  return <HashRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
    </HashRouter>
}

export default MainApp;