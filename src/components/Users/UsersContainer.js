import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Users from './Users.js';
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress} from './../../Redux/users-reducer.js';
import Preloader from './../common/Preloader/Preloader.js';
import {usersAPI} from './../../api/api.js';

class UsersContainer extends React.Component {
	
	componentDidMount() {
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount)
		});
	}


	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items)
		});
	}

	render() {
		return <>
		{this.props.isFetching ? <Preloader /> : null}
		<Users totalUsersCount={this.props.totalUsersCount} 
		pageSize={this.props.pageSize} currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged} users={this.props.users} 
			follow={this.props.follow} unfollow={this.props.unfollow}
			toggleFollowingProgress={this.props.toggleFollowingProgress} 
			followinginProgress={this.props.followinginProgress}
			/>
			</>
	}
}


let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followinginProgress: state.usersPage.followinginProgress
	}
}

export default connect(mapStateToProps, {	
		follow, 
		unfollow,
		setUsers, 
		setCurrentPage,
		setTotalUsersCount,
		toggleIsFetching,
		toggleFollowingProgress
	})(UsersContainer)