import React from 'react';

import CommentBox from '../comment-box/comment-box.component';
import Comment from '../comment/comment.component';

import './post.styles.css';

class Post extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='card'>
          <div className='card-header'>
            <div className='profile-img'>
              <img
                class='profile-img'
                src='https://yt3.ggpht.com/a/AATXAJwtSK-qrmSPRj-37BLIG9U0fTRhzwDR2Okct-0H=s100-c-k-c0xffffffff-no-rj-mo'
                alt='profile-pic'
              />
            </div>
            <div class='profile-info'>
              <div class='name'>nuggetnchill</div>
              <div class='location'>New York, New York</div>
            </div>
            <div className='option-dot'>...</div>
          </div>
          <div className='content'>
            <img
              src='https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
              class='content'
              alt='the sky'
            />
          </div>
          <div className='card-footer'>
            <div className='footer-content'>
              <Comment />
              <CommentBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
