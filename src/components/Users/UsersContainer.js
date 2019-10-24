import React from 'react';
import {connect} from 'react-redux';
import Users from './Users.js';
import {setCurrentPage,  
	toggleFollowingProgress, requestUsers, follow, unfollow} from './../../Redux/users-reducer.js';
import Preloader from './../common/Preloader/Preloader.js';
import {compose} from 'redux';
import {getUsersSuperSelector, getPageSize, getIsFetching, getFollowingInProgress, getTotalUsersCount, getCurrentPage} from './../../Redux/users-selectors.js';

class UsersContainer extends React.Component {
	
	componentDidMount() {
		const {requestUsers, currentPage, pageSize} = this.props;
		requestUsers(currentPage, pageSize);
	}


	onPageChanged = (pageNumber) => {
		const {requestUsers, pageSize} = this.props;
		requestUsers(pageNumber, pageSize);
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
		users: getUsersSuperSelector(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followinginProgress: getFollowingInProgress(state)
	}
};

export default compose(connect(mapStateToProps, {	
		setCurrentPage,
		toggleFollowingProgress,
		requestUsers, follow, unfollow
	}))(UsersContainer)