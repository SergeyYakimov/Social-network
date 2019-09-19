const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

	posts: [
		{id: 1, text: "How are you?", likeCount: 15},
		{id: 2, text: "I am fine, and you?", likeCount: 35}
	],
	newPostText: 'it-kamasutra.com'
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

export default profileReducer;