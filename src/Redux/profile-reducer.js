import {usersAPI, profileAPI} from './../api/api.js';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {

	posts: [
		{id: 1, text: "How are you?", likeCount: 15},
		{id: 2, text: "I am fine, and you?", likeCount: 35}
	],
	profile: null,
	status: ''
}

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST: {
			let newPost = {
		 		id: 5,
		 		text: action.newPostText,
		 		likeCount: 0,
		 		
		 	};

		 	return {
		 		...state,
		 		posts: [...state.posts, newPost]
		 	}
		}

		case SET_STATUS: {
			
			return {
		 		...state,
		 		status: action.status
		 	}
		}

		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}

		case DELETE_POST: {
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.postId)
			}
		}

		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText
  }
}

export const setUserProfile = (profile) => {
  return {
  	type: SET_USER_PROFILE, profile
  }
}

export const getUserProfile = (userId) => async (dispatch) => {
	
	let response = await usersAPI.getProfile(userId);
	
	dispatch(setUserProfile(response.data));
}

export const setStatus = (status) => {
	return {
		type: SET_STATUS, status
	}
}

export const getStatus = (userId) => async (dispatch) => {
	let response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status);
		
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}

export const deletePost = (postId) => ({
	type: DELETE_POST, postId
})

export default profileReducer;