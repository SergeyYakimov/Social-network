import {usersAPI, profileAPI} from './../api/api.js';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


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

		case SAVE_PHOTO_SUCCESS: {
			return {
				...state,
				profile: {...state.profile, photos: action.photos}
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

export const savePhotoSuccess = (photos) => {
	return {
	  type: SAVE_PHOTO_SUCCESS, photos
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

export const savePhoto = (file) => async (dispatch) => {
	let response = await profileAPI.savePhoto(file);
		
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos));
	}
}

export const deletePost = (postId) => ({
	type: DELETE_POST, postId
})

export default profileReducer;