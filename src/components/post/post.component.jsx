import React from 'react';

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
              />
            </div>
            <div class='profile-info'>
              <div class='name'>nuggetnchill</div>
              <div class='location'>New York, New York</div>
            </div>
            <div className='option'>...</div>
          </div>
          <div className='content'>
            <img
              src='https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
              class='content'
            />
          </div>
          <div className='card-footer'>
            <div className='footer-content'>
              Liked by <span className='likes'>yourmom</span> and
              <span class='likes'> 98 others </span>
              <p>
                <span>nuggetnchill</span> What's up? ...the sky!
              </p>
              <p>
                <span>gary</span> where u going?
              </p>
              <p>
                <span>sal_vulcano</span> Beautiful Picture ♥
              </p>
              <p>
                <span>suh_dude</span> Yoooo
              </p>
              <form class='form'>
                <span class='heart'>
                  <i class='fa fa-heart-o' aria-hidden='true'></i>
                </span>
                <span class='add-comment'>
                  <input type='text' placeholder='Add a comment...' />
                </span>
                <span class='options'>
                  <i class='fa fa-ellipsis-h'></i>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
