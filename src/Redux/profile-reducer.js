import {usersAPI, profileAPI} from './../api/api.js';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {

	posts: [
		{id: 1, text: "How are you?", likeCount: 15},
		{id: 2, text: "I am fine, and you?", likeCount: 35}
	],
	newPostText: 'it-kamasutra.com',
	profile: null,
	status: ''
}

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST: {
			let newPost = {
		 		id: 5,
		 		text: state.newPostText,
		 		likeCount: 0,
		 		
		 	};

		 	/*let stateCopy = {...state};
		 	stateCopy.posts = [...state.posts];

		 	stateCopy.posts.push(newPost);
		 	stateCopy.newPostText = '';
		 	return stateCopy;*/
		 	return {
		 		...state,
		 		newPostText: '',
		 		posts: [...state.posts, newPost]
		 	}
		}
		case UPDATE_NEW_POST_TEXT: {
			/*let stateCopy = {...state};
			stateCopy.newPostText = action.newText;
			return stateCopy;*/
			return {
		 		...state,
		 		newPostText: action.newText
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
		default:
			return state;
	}
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST 
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
  }
}

export const setUserProfile = (profile) => {
  return {
  	type: SET_USER_PROFILE, profile
  }
}

export const getUserProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getProfile(userId).then(response => {
			dispatch(setUserProfile(response.data));
		});
	}
}

export const setStatus = (status) => {
	return {
		type: SET_STATUS, status
	}
}

export const getStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then(response => {
		dispatch(setStatus(response.data))
	})
}

export const updateStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setStatus(status))
		}
	})
}

export default profileReducer;