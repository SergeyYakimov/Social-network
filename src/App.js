import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.js';
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import UsersContainer from './components/Users/UsersContainer.js';
import HeaderContainer from './components/Header/HeaderContainer.js';

const App = (props) => {


  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          {/*<Route path="/messages" component={Dialogs} />
          <Route path="/profile" component={Profile} />*/}
          <Route path="/messages" render={() => <DialogsContainer />}/>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
          <Route path="/users" render={() => <UsersContainer />}/>
        </div>
      </div> 
  );
}

export default App;
