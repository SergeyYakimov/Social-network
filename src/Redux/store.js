import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
import sidebarReducer from './sidebar-reducer.js';

let store = {
	_state: {
		profilePage: {
			posts: [
			    {id: 1, text: "How are you?", likeCount: 15},
			    {id: 2, text: "I am fine, and you?", likeCount: 35}
	  	    ],
	  	    newPostText: 'it-kamasutra.com'
		},
		dialogsPage: {
			messages: [
				{id: 1, message: "Hi!"},
				{id: 2, message: "Yo, dude!"},
				{id: 3, message: "Motherfucker yo!!!"}
			],
			dialogs: [
				{id: 1, name: "Dimych"},
				{id: 2, name: "Andrey"},
				{id: 3, name: "Sveta"},
				{id: 4, name: "Sasha"},
				{id: 5, name: "Viktor"},
				{id: 6, name: "Valera"}

			],
			newMessageBody: '2'
		}
	 	
	  	
	},

	_callSubscriber() {

	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
	 	this._callSubscriber = observer;
	},

	dispatch (action) { // { type: 'ADD-POST' }
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	}
}

export default store;