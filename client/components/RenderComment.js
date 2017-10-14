import React from 'react';

const renderDate = (date) => {
  const monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const newDate = new Date(date);
  const month = monthsList[newDate.getMonth()];
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return `${month} ${day}, ${year}`;
};

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
          <date>{renderDate(comment.createdAt)}</date>
        </div>
      </div>
      <p className="flow-text">{comment.comment}</p>
    </div>
  ));

  return <div>{showComments}</div>;
};


export default RenderComment;
