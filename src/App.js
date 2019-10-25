import React from 'react';
import store from './Redux/redux-store.js';
import {Provider, connect} from 'react-redux'; 
import {compose} from 'redux';
import {withRouter, Route, HashRouter} from 'react-router-dom';
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

  componentDidMount() {
    this.props.initializeApp();
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
          <Route path="/messages" render={withSuspense(DialogsContainer)}/>
          <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
          <Route path="/users" render={() => <UsersContainer />}/>
          <Route path="/login" render={() => <LoginPage />}/>
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