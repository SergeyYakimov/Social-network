import React from 'react';
import {connect} from 'react-redux';
import Users from './Users.js';
import {followAC, unfollowAC, setUsersAC} from './../../Redux/users-reducer.js';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {	
		follow: (userId) => {
			dispatch(followAC(userId))
		}, 
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users))
		} 
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)