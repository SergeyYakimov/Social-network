import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
	
  return (
              <div className={style.item}>
                <img src="https://yt3.ggpht.com/a/AGF-l7-gRDVH6asZkW92cY1ONdIkDlpWPLSPoOlpSg=s900-mo-c-c0xffffffff-rj-k-no"></img>
                {props.message}
                <div>
                  <span>{props.like}</span>
                </div>
              </div>
              
  )
}

export default Post;