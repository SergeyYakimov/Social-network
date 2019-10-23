import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer.js';

let state = {

	posts: [
		{id: 1, text: "How are you?", likeCount: 15},
		{id: 2, text: "I am fine, and you?", likeCount: 35}
	]
};

it('length of posts should be incremented', () => {
	
	let action = addPostActionCreator("interesting text");

	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
	
	let action = addPostActionCreator("interesting text");

	let newState = profileReducer(state, action);

	expect(newState.posts[2].text).toBe("interesting text");
});

it('after deleting length of messages should be decrement', () => {
	
	let action = deletePost(1);

	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(1);
});

it(`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {
	
	let action = deletePost(1000);

	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(2);
});