import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
	return (
		<header className={s.header}>
          <img src="https://pixy.org/src/70/704855.png"></img>
          <div className={s.loginBlock}>
          	{ props.isAuth ? 
          		<div>{props.login} 
          		<button onClick={props.logout}>logout</button></div>
          		: 
          		<NavLink to="/login">Login</NavLink>}
          </div>
        </header>

		)
	
}

export default Header;

