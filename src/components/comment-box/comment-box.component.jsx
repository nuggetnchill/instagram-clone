import React from 'react'

import './comment-box.styles.css';

 class CommentBox extends React.Component {
    render() {
        return (
            <div className='container'>
                <input
                    className='comment-box-input'
                    type='text'
                    placeholder='Add a comment...'>
                </input>
            </div>
        )
    }
}

export default CommentBox;