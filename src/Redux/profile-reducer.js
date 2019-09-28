import {usersAPI} from './../api/api.js';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {

	posts: [
		{id: 1, text: "How are you?", likeCount: 15},
		{id: 2, text: "I am fine, and you?", likeCount: 35}
	],
	newPostText: 'it-kamasutra.com',
	profile: null
}

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_POST: {
			let newPost = {
		 		id: 5,
		 		text: state.newPostText,
		 		likeCount: 0
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

export default profileReducer;