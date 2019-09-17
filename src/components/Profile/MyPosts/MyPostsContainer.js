import React from 'react';
import MyPosts from './MyPosts.jsx';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../Redux/profile-reducer.js';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  }
  
  return (<MyPosts posts={state.profilePage.posts} 
    updateNewPostText={onPostChange} addPost={addPost} newPostText={state.profilePage.newPostText} />)
}

export default MyPostsContainer;