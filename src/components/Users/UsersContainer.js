import React from 'react';
import {connect} from 'react-redux';
import Users from './Users.js';
import {setUsers, setCurrentPage, setTotalUsersCount, 
	toggleIsFetching, toggleFollowingProgress, getUsers, follow, unfollow} from './../../Redux/users-reducer.js';
import Preloader from './../common/Preloader/Preloader.js';



class UsersContainer extends React.Component {
	
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
		/*this.props.toggleIsFetching(true);
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items);
			this.props.setTotalUsersCount(data.totalCount)
		});*/
	}


	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
		/*this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(data.items)
		});*/
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
}

export default connect(mapStateToProps, {	
		setCurrentPage,
		toggleFollowingProgress,
		getUsers, follow, unfollow
	})(UsersContainer)