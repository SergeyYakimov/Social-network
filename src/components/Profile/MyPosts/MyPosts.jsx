import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {reduxForm, Field} from 'redux-form';
import {required, maxLengthCreator} from './../../../utils/validators/validators.js';
import {Textarea} from './../../common/FormControls/FormControls.js';

const maxLength30 = maxLengthCreator(30);

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map(post => <Post message={post.text} like={post.likeCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }
      
  return (
    <div className={style.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostForm onSubmit={onAddPost}/>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  )
})

//class MyPosts extends React.PureComponent {

  /*shouldComponentUpdate (nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state;
  }*/

  /*render() {
      let postsElements = this.props.posts.map(post => <Post message={post.text} like={post.likeCount} />);

      let newPostElement = React.createRef();

      let onAddPost = (values) => {
        this.props.addPost(values.newPostText);
      }
      
      return (
              <div className={style.postsBlock}>
                <h3>My posts</h3>
                  <AddNewPostForm onSubmit={onAddPost}/>
                <div className={style.posts}>
                  {postsElements}
                </div>
               </div>
      )
    }
}*/

let AddNewPostForm = (props) => {
      return (
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field component={Textarea} 
            name={"newPostText"} 
            placeholder={"Post message"}
            validate={[required, maxLength30]}/>
          </div>
          <div>
            <button>Add post
            </button>
          </div>    
        </form>      
      )
  }

AddNewPostForm = reduxForm({
  // a unique name for the form
  form: 'ProfileAddNewPostForm'
})(AddNewPostForm)

export default MyPosts;