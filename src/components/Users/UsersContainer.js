import React from 'react';
import {connect} from 'react-redux';
import Users from './Users.js';
import {setCurrentPage,  
	toggleFollowingProgress, getUsers, follow, unfollow} from './../../Redux/users-reducer.js';
import Preloader from './../common/Preloader/Preloader.js';
import {compose} from 'redux';

class UsersContainer extends React.Component {
	
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}


	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
	}

	render() {
		return <>
		{this.props.isFetching ? <Preloader /> : null}
		<Users totalUsersCount={this.props.totalUsersCount} 
		pageSize={this.props.pageSize} currentPage={this.props.currentPage}
			onPageChanged={this.onPageChanged} users={this.props.users} 
			toggleFollowingProgress={this.props.toggleFollowingProgress} 
			followinginProgress={this.props.followinginProgress}
			follow={this.props.follow}
			unfollow={this.props.unfollow}
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
};

export default compose(connect(mapStateToProps, {	
		setCurrentPage,
		toggleFollowingProgress,
		getUsers, follow, unfollow
	}))(UsersContainer)