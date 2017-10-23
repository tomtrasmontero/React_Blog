import React from 'react';
import renderDate from '../utils';

const RenderComment = (prop) => {
  const commentList = prop.comment;

  if (commentList.length === 0) {
    return (
      <div>Be the first to Comment!</div>
    );
  }

  const showComments = commentList.map(comment => (
    <div key={comment.id} className="comment-post z-depth-2">
      <div className="row">
        <div className="col s12 m8">
          <h4>{comment.userName}</h4>
        </div>
        <div className="col s12 m4 dateContainer">
          <div>{renderDate(comment.createdAt)}</div>
        </div>
      </div>
      <div className="divider" />
      <p className="flow-text">{comment.comment}</p>
    </div>
  ));

  return <div>{showComments}</div>;
};


export default RenderComment;
