import React from 'react';
import MyPosts from './MyPosts.jsx';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../Redux/profile-reducer.js';
import {connect} from 'react-redux';

/*const MyPostsContainer = (props) => {
  //let state = props.store.getState();
  
  return (
    <StoreContext.Consumer >
    {
      (store) => {
        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let onPostChange = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        }
      return <MyPosts posts={state.profilePage.posts} 
    updateNewPostText={onPostChange} addPost={addPost} newPostText={state.profilePage.newPostText} />;
    }
    }
    </StoreContext.Consumer >
    )
}*/

const mapStateToProps = (state) => {
  return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      updateNewPostText: (text) => {
          let action = updateNewPostTextActionCreator(text);
          dispatch(action);
      },
      addPost: () => {
        dispatch(addPostActionCreator());
      }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;