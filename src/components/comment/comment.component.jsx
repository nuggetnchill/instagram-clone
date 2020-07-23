import React from 'react'

 class Comment extends React.Component {
    render() {
        return (
          <div>
            Liked by <span className='likes'>yourmom</span> and
            <span class='likes'> 98 others </span>
            <p>
              <span>nuggetnchill</span> What's up? ...the sky!
            </p>
            <p>
              <span>gary</span> where u going?
            </p>
          </div>
        );
    }
}

export default Comment;