import React from 'react';
import store from './Redux/redux-store.js';
import {Provider, connect} from 'react-redux'; 
import {compose} from 'redux';
import {withRouter, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.js';
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import UsersContainer from './components/Users/UsersContainer.js';
import HeaderContainer from './components/Header/HeaderContainer.js';
import LoginPage from './components/login/login.jsx';
import Preloader from './components/common/Preloader/Preloader.js';
import {initializeApp} from './Redux/app-reducer.js';

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
          <Route path="/messages" render={() => <DialogsContainer />}/>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
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
  return <BrowserRouter>
    <Provider store={store} >
      <AppContainer />
    </Provider>
    </BrowserRouter>
}

export default MainApp;