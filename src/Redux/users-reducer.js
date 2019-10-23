import {usersAPI} from './../api/api.js';
import {updateObjectInArray} from './../utils/object-helpers.js';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
	users: [],
	pageSize: 35,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followinginProgress: []
}

const usersReducer = (state = initialState, action) => {
	switch(action.type) {
		case FOLLOW: 
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}) 
			}

		case UNFOLLOW:
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {followed: false}) 
			}

		case SET_USERS: {
			return {...state, users: action.users};
		}

		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}

		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalUsersCount: action.count}
		}

		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
		}

		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {...state, 
				followinginProgress: 
				action.followinginProgress ?
				[...state.followinginProgress, action.userId] :
				state.followinginProgress.filter(id => id !== action.userId)
			}
		}
			
		default:
			return state;
	}
}

export const followSuccess = (userId) => {
  return {
    type: FOLLOW, userId 
  }
}

export const unfollowSuccess = (userId) => {
  return {
    type: UNFOLLOW, userId
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS, users
  }
}

export const setCurrentPage = (pageNumber) => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage: pageNumber
	}
}

export const setTotalUsersCount = (totalUsersCount) => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		count: totalUsersCount
	}
}

export const toggleIsFetching = (isFetching) => {
	return {
		type: TOGGLE_IS_FETCHING, 
		isFetching
	}
}

export const toggleFollowingProgress = (followinginProgress, userId) => {
	return {
		type: TOGGLE_IS_FOLLOWING_PROGRESS, 
		followinginProgress, 
		userId
	}
}

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
	
	dispatch(toggleIsFetching(true));
	let data = await usersAPI.getUsers(currentPage, pageSize);
	dispatch(toggleIsFetching(false));
	dispatch(setCurrentPage(currentPage))
	dispatch(setUsers(data.items));
	dispatch(setTotalUsersCount(data.totalCount));	
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
	dispatch(toggleFollowingProgress(true, userId));

	let response = await apiMethod(userId);
			
	if (response.data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(userId), followSuccess);
	}
}

export const unfollow = (userId) => {
	return async (dispatch) => {
		followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(userId), unfollowSuccess);
	}
}    
	
export default usersReducer;